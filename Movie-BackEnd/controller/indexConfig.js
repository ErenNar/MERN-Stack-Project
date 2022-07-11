
const MovieAdd = require("../model/home/index");
const Admin = require('../model/admin')



// admin
const DashboardnGet = (req, res, next) => {
  res.render("index.ejs");
};

// all-movies
const adminHAllMoviesGet = async (req, res, next) => {
  try {
    const FindList = await MovieAdd.find();
    res.render("./layout/MoviesAll.ejs", { FindList });
  } catch (error) {
    console.log(error);
  }
};

const movieAddGet = (req, res, next) => {
  res.render("./layout/MovieAdd.ejs");
};

const movieAddPost = async (req, res, next) => {
  try {
    const postData = {
      movieImg: req.files.avatar,
      movieTitle: req.body.movieTitle,
      movieSubject: req.body.movieSubject,
      movieDirector: req.body.movieDirector,
      movieActress: req.body.movieActress,
      movieYear: req.body.movieYear,
      movieCategory: req.body.movieCategory,
      movieTimer: req.body.movieTimer,
      movieImdb: req.body.movieImdb,
      movieVideo: req.files.movieVideo,
    };

    const file = postData.movieImg;
    const filename = file.name;
    file.mv("./uploads/img/" + filename);

    const video = postData.movieVideo;
    const videoname = video.name;
    video.mv("./uploads/vid/" + videoname);

    /*
    const extension2 = path.extname(req.files.movieVideo.name);
    const videoPath = req.files.movieVideo.md5;
    const URL2 = "./uploads/vid/" + videoPath + extension2;
    req.files.movieVideo.mv(URL2);*/

    const addMovie = await new MovieAdd({
      movieImg: "http://localhost:5000/img/" + postData.movieImg.name,
      movieTitle: postData.movieTitle,
      movieSubject: postData.movieSubject,
      movieDirector: postData.movieDirector,
      movieActress: postData.movieActress,
      movieYear: postData.movieYear,
      movieCategory: postData.movieCategory,
      movieTimer: postData.movieTimer,
      movieImdb: postData.movieImdb,
      movieVideo: "http://localhost:5000/vid/" + postData.movieVideo.name,
    });
    const write = await addMovie.save();
    res.redirect("/dashboard/all-movies");
  } catch (error) {
    next(error);
  }
};

const detailMovie = async (req, res, next) => {
  try {
    const id = req.params.id;
    const findID = await MovieAdd.findOne({ _id: id });
     
    res.render("./layout/detailMovies.ejs", { findID: findID });
  } catch (error) {
    console.log(error);
  }
};

const movieDeletePost = async (req, res, next) => {
  try {
    const deleteID = req.params.id;

    const findDelete = await MovieAdd.findByIdAndDelete(deleteID);
    res.redirect("/dashboard/all-movies");
  } catch (error) {
    next(error);
  }
};

const movieAction = async (req, res, next) => {
  try {
    const FindList = await MovieAdd.find({ movieCategory: "Aksiyon" });
    res.render("./layout/actionPage.ejs", { FindList });
  } catch (error) {
    console.log(error);
  }
};

const movieAdvanture = async (req, res, next) => {
  try {
    const FindList = await MovieAdd.find({ movieCategory: "Macera" });
    res.render("./layout/advanturePage.ejs", { FindList });
  } catch (error) {
    console.log(error);
  }
};

const movieComedy = async (req, res, next) => {
  try {
    const FindList = await MovieAdd.find({ movieCategory: "Komedi" });
    res.render("./layout/comedyPage.ejs", { FindList });
  } catch (error) {
    console.log(error);
  }
};

const movieDram = async (req, res, next) => {
  try {
    const FindList = await MovieAdd.find({ movieCategory: "Dram" });
    res.render("./layout/dramPage.ejs", { FindList });
  } catch (error) {
    console.log(error);
  }
};

const movieHistory = async (req, res, next) => {
  try {
    const FindList = await MovieAdd.find({ movieCategory: "Tarih" });
    res.render("./layout/historyPage.ejs", { FindList });
  } catch (error) {
    console.log(error);
  }
};

const movieScienceFiction = async (req, res, next) => {
  try {
    const FindList = await MovieAdd.find({ movieCategory: "Bilim Kurgu" });
    res.render("./layout/science_fictionPage.ejs", { FindList });
  } catch (error) {
    console.log(error);
  }
};
const movieRomantizm = async (req, res, next) => {
  try {
    const FindList = await MovieAdd.find({ movieCategory: "Romantizim" });
    res.render("./layout/romantizmPage.ejs", { FindList });
  } catch (error) {
    console.log(error);
  }
};
const settingGet = (req, res, next) => {
  res.render("./layout/setting.ejs");
};

const settingPost = async (req, res, next) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    try {
      const mail = req.body.mail;
      const password = req.body.password;
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
      const updateAdmin = await Admin.findOneAndUpdate(
        req.params._id,
        { mail: mail, password: hashPassword },
        { new: true }
      );
      res.redirect("/admin");
    } catch (error) {
      next(error);
    }
  } else {
    req.flash("error", error.array());
    res.render("./layout/setting.ejs", { error: error.array() });
  }
};

/*
const searchPost = async (req,res,next)=>{
  try {
    
    const val = req.query.q
    console.log(val);
    const findData = await MovieAdd.find({movieTitle:val})
    res.render('./layout/list.ejs',{findData})



  } catch (error) {
    
  }

}
*/

module.exports = {
 
  adminHAllMoviesGet,
  movieAddGet,
  movieAddPost,
  movieDeletePost,
  detailMovie,
  movieAction,
  movieAdvanture,
  movieComedy,
  movieDram,
  movieHistory,
  movieScienceFiction,
  movieRomantizm,
  DashboardnGet,
  settingGet,
  settingPost,
 
};

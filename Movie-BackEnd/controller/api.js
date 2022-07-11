const MovieApi = require("../model/home/index");

const allMovie = async (req, res, next) => {
  try {
    const all = await MovieApi.find().sort({movieYear:-1});
    res.status(200).json(all);
  } catch (error) {
    next(error);
  }
};




const allDetail = async (req, res, next) => {
  try {
    const idAll = req.params.id;
    const detailAll = await MovieApi.findById({ _id: idAll });
    res.send(detailAll);
  } catch (error) {
    next(error);
  }
};

const actionMovie = async (req, res, next) => {
  try {
    const action = await MovieApi.find({ movieCategory: "Aksiyon" });
    res.status(200).json(action);
  } catch (error) {
    next(error);
  }
};

const actionDetail = async (req, res, next) => {
  try {
    const idAction = req.params.id;
    const detailAction = await MovieApi.findById(idAction);
    res.status(200).json(detailAction);
  } catch (error) {
    next(error);
  }
};

const advantureMovie = async (req, res, next) => {
  try {
    const advanture = await MovieApi.find({ movieCategory: "Macera" });
    res.status(200).json(advanture);
  } catch (error) {
    next(error);
  }
};

const advantureDetail = async (req, res, next) => {
  try {
    const idAdvanture = req.params.id;
    const detailAdvanture = await MovieApi.findById(idAdvanture);
    res.status(200).json(detailAdvanture);
  } catch (error) {
    next(error);
  }
};

const comedyMovie = async (req, res, next) => {
  try {
    const comedy = await MovieApi.find({ movieCategory: "Komedi" });
    res.status(200).json(comedy);
  } catch (error) {
    next(error);
  }
};

const comedyDetail = async (req, res, next) => {
  try {
    const idComedy = req.params.id;
    const detailDomedy = await MovieApi.findById(idComedy);
    res.status(200).json(detailDomedy);
  } catch (error) {
    next(error);
  }
};

const dramMovie = async (req, res, next) => {
  try {
    const dram = await MovieApi.find({ movieCategory: "Dram" });
    res.status(200).json(dram);
  } catch (error) {
    next(error);
  }
};

const dramMDetail = async (req, res, next) => {
  try {
    const idDram = req.params.id;
    const detailDram = await MovieApi.findById(idDram);
    res.status(200).json(detailDram);
  } catch (error) {
    next(error);
  }
};

const historyMovie = async (req, res, next) => {
  try {
    const history = await MovieApi.find({ movieCategory: "Tarih" });
    res.status(200).json(history);
  } catch (error) {
    next(error);
  }
};

const historyDetail = async (req, res, next) => {
  try {
    const idHistory = req.params.id;
    const detailHistory = await MovieApi.findById(idHistory);
    res.status(200).json(detailHistory);
  } catch (error) {
    next(error);
  }
};

const romantizmMovie = async (req, res, next) => {
  try {
    const romantizim = await MovieApi.find({ movieCategory: "Romantizim" });
    res.status(200).json(romantizim);
  } catch (error) {
    next(error);
  }
};

const romantizmDetail = async (req, res, next) => {
  try {
    const idRomantizm = req.params.id;
    const detailRomatizm = await MovieApi.findById(idRomantizm);
    res.status(200).json(detailRomatizm);
  } catch (error) {
    next(error);
  }
};

const ScienceFictionMoviemMovie = async (req, res, next) => {
  try {
    const Science = await MovieApi.find({ movieCategory: "Bilim Kurgu" });
    res.status(200).json(Science);
  } catch (error) {
    next(error);
  }
};

const ScienceFictionMoviemDetail = async (req, res, next) => {
  try {
    const idRomantizm = req.params.id;
    const detailRomatizm = await MovieApi.findById(idRomantizm);
    res.status(200).json(detailRomatizm);
  } catch (error) {
    next(error);
  }
};

const mostMovie = async (req, res, next) => {
  try {
    const most = await MovieApi.find().sort({ movieImdb: -1 }).limit(17);
    res.status(200).json(most);
  } catch (error) {
    next(error);
  }
};

const mostDetail = async (req, res, next) => {
  try {
    const idMost = req.params.id;
    const detailMost = await MovieApi.findById(idMost);
    res.status(200).json(detailMost);
  } catch (error) {
    next(error);
  }
};

const getSlide =  async(req,res,next) =>{
  try {
    const slide = await MovieApi.find().sort({ movieYear: -1 }).limit(15);
    res.status(200).json(slide)
  } catch (error) {
      next(error)
  }
}
module.exports = {
  getSlide,
  allMovie,
  allDetail,
  actionMovie,
  actionDetail,
  actionDetail,
  advantureMovie,
  advantureDetail,
  advantureDetail,
  comedyMovie,
  comedyDetail,
  dramMovie,
  dramMDetail,
  historyMovie,
  historyDetail,
  romantizmMovie,
  romantizmDetail,
  mostMovie,
  mostDetail,
  ScienceFictionMoviemMovie,
  ScienceFictionMoviemDetail,
};

const Admin = require("../model/admin");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

// auth
const loginGet = (req, res, next) => {
    res.render("./login/login.ejs");
  };
  
  const loginPost = async (req, res, next) => {
    const defaultName = process.env.DEFAULT_NAME;
    const defaultPassword = process.env.DEFAULT_PASSWORD;
    const mail = req.body.mail;
    const password = req.body.password;
    try {
      const findInfo = await Admin.findOne({});
  
      if (
        (defaultName == mail && defaultPassword == password) ||
        (findInfo.mail == mail && findInfo.password == password)
      ) {
        req.session.secret = process.env.SECRET;
        res.redirect("/dashboard");
      } else {
        req.flash("loginErr", "Şifre Veya Email Hatalı");
        res.render("./login/login.ejs", { loginErr: req.flash("loginErr") });
      }
    } catch (error) {
      next(error);
    }
  };
  
  const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/admin')
  };


  
  

  module.exports={
    loginGet,
    loginPost,
    logout,
   

  }
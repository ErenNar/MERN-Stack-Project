const { body } = require("express-validator");

const adminValidate = () => {
  return [
    body("mail").isEmail().trim().withMessage("Geçerli Bir email Gir"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Şifre En Az 5 Karakter Olmalı"),
    body("repassword").custom((val, { req }) => {
      if (val !== req.body.password) {
        throw new Error("Şifreler Aynı Değil");
      }
      return true;
    }),
  ];
};

module.exports = {
  adminValidate,
};

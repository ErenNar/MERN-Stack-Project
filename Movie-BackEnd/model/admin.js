const mongoose = require("mongoose");

const adminSetting = new mongoose.Schema(
  {
    mail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: process.env.ADMIN }
);

const Admin = mongoose.model(process.env.ADMIN, adminSetting);

module.exports = Admin;

const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    movieImg: {
      type: String,
    },
    movieTitle: {
      type: String,
      trim: true,
    },
    movieSubject: {
      type: String,
      trim: true,
    },
    movieDirector: {
      type: String,
      trim: true,
    },
    movieActress: {
      type: String,
      trim: true,
    },
    movieYear: {
      type: Number,
      trim: true,
    },
    movieCategory: {
      type: String,
      trim: true,
    },
    movieTimer: {
      type: String,
      trim: true,
    },
    movieImdb: {
      type: Number,
      trim: true,
    },
    movieVideo: {
      type: String,
    },
  },
  { collection: process.env.Movie, timestamps: true }
);

const Movie = mongoose.model(process.env.Movie, MovieSchema);

module.exports = Movie;

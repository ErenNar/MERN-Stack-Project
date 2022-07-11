const express = require("express");
const router = express.Router();
const controller = require("../controller/indexConfig.js");
const validation = require("../validation/validate");

//admin page
router.get("/", controller.DashboardnGet);

// home
router.get("/all-movies", controller.adminHAllMoviesGet);

router.get("/all-movies/add", controller.movieAddGet);
router.post("/all-movies/add", controller.movieAddPost);
router.get("/all-movies/:id", controller.detailMovie);

router.get("/action-movie", controller.movieAction);

router.get("/advanture-movie", controller.movieAdvanture);

router.get("/comedy-movie", controller.movieComedy);

router.get("/dram-movie", controller.movieDram);

router.get("/history-movie", controller.movieHistory);

router.get("/science-fiction-movie", controller.movieScienceFiction);

router.get("/romantizm-movie", controller.movieRomantizm);

router.post("/delete-movie/:id", controller.movieDeletePost);

router.get("/setting", controller.settingGet);
router.post("/setting", validation.adminValidate(), controller.settingPost);



//router.get('/search',controller.searchPost)

module.exports = router;

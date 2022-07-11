const express = require("express");
const router = express.Router();
const controller = require("../controller/api");

router.get("/all-movies", controller.allMovie);
router.get("/all-movies/:id", controller.allDetail);

router.get("/action-movie", controller.actionMovie);
router.get("/action-movie/:id", controller.actionDetail);

router.get("/advanture-movie", controller.advantureMovie);
router.get("/advanture-movie/:id", controller.advantureDetail);

router.get("/comedy-movie", controller.comedyMovie);
router.get("/comedy-movie/:id", controller.comedyDetail);

router.get("/dram-movie", controller.dramMovie);
router.get("/dram-movie/:id", controller.dramMDetail);

router.get("/history-movie", controller.historyMovie);
router.get("/history-movie/:id", controller.historyDetail);

router.get("/romantizm-movie", controller.romantizmMovie);
router.get("/romantizm-movie/:id", controller.romantizmDetail);

router.get("/science-fiction-movie", controller.ScienceFictionMoviemMovie);
router.get("/science-fiction-movie/:id", controller.ScienceFictionMoviemDetail);

router.get("/most-movie", controller.mostMovie);
router.get("/most-movie/:id", controller.mostDetail);


router.get('/slider-movie' , controller.getSlide)
module.exports = router;

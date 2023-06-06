const express = require("express");
const filmRouter = express.Router();
const controller = require("../controllers/filmController");

//GET
filmRouter.get("/?", controller.getFilmTitle);
filmRouter.get("/film/:title", controller.getFilmInfo);
//POST
filmRouter.post("/film/", controller.postFilm);


module.exports = {
    filmRouter
}
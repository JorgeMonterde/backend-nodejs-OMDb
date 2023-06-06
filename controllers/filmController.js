const fetchFunctions = require("../utils/fetch_functions");

// Get
const getFilmTitle = (req, res) => {
    try {
        res.status(200).render("home", {pageName: "Home"});
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

const getFilmInfo = async (req,res) => {
    try {
        let title = req.params.title;
        let filmInfo = await fetchFunctions.getMovieFromAPI(title); //ask to fetch function
        res.status(200).render("film", {
                                            pageName: "Film",
                                            title: filmInfo.Title, 
                                            Director: filmInfo.Director,
                                            Year: filmInfo.Year,
                                            Poster: filmInfo.Poster,
                                            plot: filmInfo.Plot,
                                        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

//POST
const postFilm = (req, res) => {
    try {
        let title = req.body.title;
        res.status(200).redirect(`http://localhost:3000/film/${title}`);
    } catch (error) {
        console.log("HELLO")
        console.log(`Error: ${error}`);
    }
}


module.exports = {
    getFilmTitle,
    getFilmInfo,
    postFilm
}
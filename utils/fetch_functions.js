require("dotenv").config();
const APIKey = process.env.API_KEY;
//http://localhost:3000/products?API_KEY="1234abcd"

async function getMovieFromAPI(title){
    //let titleQuery = title.split(""). ...Function to change title format
    try {
        console.log(APIKey);
        let response = await fetch(`https://www.omdbapi.com/?apikey=${APIKey}&t=${title}`);
        let filmInfo = await response.json();
        return filmInfo;
    } catch (error) {
        console.log(`Ha habido un error: ${error}`);
    }
}

module.exports = {
    getMovieFromAPI
}
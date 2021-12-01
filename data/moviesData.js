const database = require('../infra/database.js');
const fs = require('fs');
const { log } = require('console');

exports.getMovies = () => {
    return database.movies();
}
exports.saveMovie = (movie) => {
    const movies = database.movies();
    movies.push(movie);
    

}
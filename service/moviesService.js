const moviesData = require('../data/moviesData');

exports.getMovies = () => {
    return moviesData.getMovies();
};

exports.saveMovie =  (movie) => {
   return moviesData.saveMovie(movie);
}
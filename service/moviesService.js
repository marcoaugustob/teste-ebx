const moviesData = require('../data/moviesData');

exports.getMovies = () => {
    return moviesData.getMovies();
};

exports.saveMovie =  (newMovie) => {
   return moviesData.saveMovie(newMovie);
}

exports.deleteMovie =  (id) => {
    return moviesData.deleteMovie(id);
 }
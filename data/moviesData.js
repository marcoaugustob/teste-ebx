const filename = "/Users/marco.costa/Documents/Repositorios/teste-ebx/infra/database.json";
let movies = require(filename)
const helper = require('../helpers/helper.js')

function getMovies() {
    return new Promise((resolve, reject) => {
        if (movies.length === 0) {
            reject({
                message: 'no posts available',
                status: 202
            })
        }
        resolve(movies)
    })
}

function saveMovie(newMovie) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(movies) }

        newMovie = { ...id, ...newMovie }
        movies.push(newMovie)
        helper.writeJSONFile(filename, movies)
        resolve(newMovie)
    })
}
function deleteMovie(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(posts, id)
            .then(() => {
                posts = posts.filter(p => p.id !== id)
                helper.writeJSONFile(filename, posts)
                resolve()
            })
            .catch(err => reject(err))
    })
}
module.exports = {
    saveMovie,
    getMovies,
    deleteMovie
}
const express = require('express');
const router = express.Router();
const moviesService = require('../service/moviesService')
const m = require('../helpers/middlewares')

router.get('/movies', async (req, res) => {
    await moviesService.getMovies()
    .then(movies => res.json(movies))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/movies', m.checkFieldsMovie, async (req, res) => {
    await moviesService.saveMovie(req.body)
    .then(movie => res.status(201).json({
        message: `The post #${movie.id} has been created`,
        content: movie
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router;
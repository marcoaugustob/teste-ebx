const express = require('express');
const router = express.Router();
const moviesService = require('../service/moviesService')


router.get('/movies', async function (req, res) {
    res.json(await moviesService.getMovies());
});
router.post('/movie');

module.exports = router;
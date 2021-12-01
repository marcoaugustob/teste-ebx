const crypto = require('crypto');
const axios = require('axios');
const moviesService = require('../service/moviesService');

const generate =() =>{
    return crypto.randomBytes(5).toString('hex');
};

test('Should get movies', async () => {
    // const movie3 = await moviesService.saveMovie({id: 3, title: generate()})

    const response = await axios({
        url: 'http://localhost:3000/movies',
        method: 'get'
    })
    const movies =  response.data;
    expect(movies).toHaveLength(1);
    // await moviesService.deleteMovie(3)
})
const crypto = require('crypto');
const axios = require('axios');
const moviesService = require('../service/moviesService');

const generate =(size) =>{
    return crypto.randomBytes(size).toString('hex');
};

test('Should get movies', async () => {
    const movie3 = await moviesService.saveMovie({title: generate(5), content: generate(15), })

    const response = await axios({
        url: 'http://localhost:3000/movies',
        method: 'get'
    })
    const movies =  response.data;
    expect(movies).toHaveLength(3);
    await moviesService.deleteMovie(3)
})
const crypto = require('crypto');
const axios = require('axios');
const moviesService = require('../service/moviesService');

const generate = (size) => {
    return crypto.randomBytes(size).toString('hex');
};

test('Should get movies', async () => {
    const movie3 = await moviesService.saveMovie({ title: generate(5), content: generate(15) });

    const response = await axios({
        url: 'http://localhost:3000/movies',
        method: 'get'
    });
    expect(response.status).toBe(200);
    await moviesService.deleteMovie(3)
})

test('Should save a movie', async () => {
    const data = { title: generate(5), content: generate(15) };

    const response = await axios({
        url: 'http://localhost:3000/movies',
        method: 'post',
        data
    });

    const { content } = response.data;
    expect(content.title).toBe(data.title);
    expect(response.status).toBe(201)
    await moviesService.deleteMovie(content.id)
})

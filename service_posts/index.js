const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const wallPosts = {};

app.get('/posts', (req, res) => {
    res.send(wallPosts);
});

app.post('/posts', (req, res) => {

    const id = randomBytes(5).toString('hex');

    const {title} = req.body;
    
    wallPosts[id] = {
        id,
        title,
    };

    res.status(220).send(wallPosts[id]);

});

app.listen(3210, () => {

    console.log('listen to posrt 3210');
});
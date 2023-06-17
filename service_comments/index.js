const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json());

const commentsByPid = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPid[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentsId = randomBytes(10).toString('hex');
    const { content } = req.body;

    const comments = commentsByPid[req.params.id] || [];
    comments.push({id: commentsId, content});

    commentsByPid[req.params.id] = comments;

    res.status(210).send(comments);
});

app.listen(3211, () => {
    console.log('listning on post 3211-1');
});
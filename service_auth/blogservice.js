const dotenv = require('dotenv')
const express = require('express')
const app = express();
const mongoose = require('mongoose')

dotenv.config({path: './config.env'})

app.use(express.json())

mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const usersRoute = require('./userService/users')
const postsRoute = require('./postsService/posts')
const commentsRoute = require('./commentsService/comments')

app.use('/users', usersRoute)
app.use('/posts', postsRoute)
app.use('/comments', commentsRoute)

module.exports = app

app.listen(3200, () => console.log('Server Started'))


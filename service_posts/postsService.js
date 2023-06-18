const dotenv = require('dotenv')
const express = require('express')
const app = express();
const mongoose = require('mongoose')

dotenv.config({path: './config.env'})

app.use(express.json())

mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Post Service :: Connected to Database'))

const postsRoute = require('./postServices/posts')

app.use('/posts', postsRoute)

module.exports = app

app.listen(3212, () => console.log('Posts Server Started'))
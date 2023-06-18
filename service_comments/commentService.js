const dotenv = require('dotenv')
const express = require('express')
const app = express();
const mongoose = require('mongoose')

dotenv.config({path: './config.env'})

app.use(express.json())

mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Comment Service :: Connected to Database'))

const commentsRoute = require('./comentsService/comments')

app.use('/comments', commentsRoute)

module.exports = app

app.listen(3211, () => console.log('Comment Server Started'))
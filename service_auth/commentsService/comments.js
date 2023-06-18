const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const userModel = require('../userService/models/userModel')

dotenv.config({path: './config.env'})

router.post('/create',authenticationToken, (req, resizeBy) => {

//    const psts = await axios.get(process.env.POSTS_SERVER + '/posts')

    resizeBy.status(201).json({message : 'authenticated'})
})

function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        res.status(401).json({message: 'Access denied'})
    }

    jwt.verify(token, process.env.JWTS, (err, user) => {
        if (err) {
            res.status(403).json({message: 'unauthorized'})
        }
        req.user = user
        next()
    })
}

module.exports = router
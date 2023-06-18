const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const userModel = require('../userService/models/userModel')
const axios = require('axios')

dotenv.config({path: './config.env'})

router.get('/create',authenticationToken, async (req, res) => {

    try {
        const psts = await axios.get(process.env.POSTS_SERVER + '/posts/all')
        console.log('posts s :' + psts)
        
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
    res.status(201).json({message : 'authenticated'})
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
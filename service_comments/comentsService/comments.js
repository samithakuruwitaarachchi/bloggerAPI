const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const Comments = require('../models/commentModel')
dotenv.config({path: './config.env'})

router.post('/:id/comment/create', authenticationToken, async(req, res) => {

    try {
        const comment = new Comments({
            content: req.body.content,
            authorID: req.body.authorID,
            postID: req.body.postID,
            createDate: req.body.createDate
        })

        comment.save()
        .then(() => {
            res.status(201).json(comment)
        })
        .catch((error) => {
            res.status(400).json({ message: error.message })
        })

    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }

})

// get comments by post
router.get('/:id/all', authenticationToken, async (req, res) => {

    try {
        const allcomments = await Comments.find({postID : req.params.id })
        console.log(req.params.id)
        res.status(201).json({data: allcomments})
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
})

router.delete('/delete/:id',getComment, async (req, res) => {

    try {
        await Comments.deleteOne({_id: req.params.id})
        res.status(200).json({ message: 'comment deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.patch('/:id/update', getComment, async (req, res) => {
    if (req.body.content != null) {
        res.comment.content = req.body.content
    }

    try {
        const updateComment = await res.comment.save()
        res.status(200).json(updateComment)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }

})

async function getComment(req, res, next) {
    let singlepost;
    try {
        singlepost = await Comments.findById(req.params.id)
        if (singlepost == null) {
            return res.status(404).json({ message: 'Cannot find commets' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message }) 
    }

    res.comment = singlepost
    next()
}

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
        console.log(user)
        req.user = user
        next()
    })
}


module.exports = router
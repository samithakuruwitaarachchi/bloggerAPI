const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const Posts = require('../models/postsModel.js')
dotenv.config({path: './config.env'})


router.post('/create',authenticationToken, async (req, res) => {

    console.log('create post called');

    try{

        const post = new Posts({
            title: req.body.title,
            content: req.body.content,
            authorID: req.body.authorID,
            createDate: req.body.createDate
        })

        post.save()
        .then(()=>{
            res.status(201).json(post)
        })
        .catch((error) => {
            res.status(400).json({ message: error.message })
        })


    }catch(error){
        res.status(400).json({ message: error.message }) 
    }

})

// get all posts
router.get('/all',authenticationToken, async (req, res) => {

    try{
        const posts = await Posts.find()
        console.log(posts)
        res.status(201).json({data: posts})

    }catch(error){
        res.status(400).json({ message: error.message }) 
    }
})

router.get('/:id', authenticationToken, async (req, res) => {

    try {
        const allposts = await Posts.find({authorID : req.params.id })
        console.log(req.params.id)
        res.status(201).json({data: allposts})
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
})

router.delete('/delete/:id',getposts, async (req, res) => {

    try {
        await Posts.deleteOne({_id: req.params.id})
        res.status(200).json({ message: 'Post deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.patch('/:id/update', getposts, async (req, res) => {
    if (req.body.title != null) {
        res.posts.title = req.body.title
    }

    if (req.body.content != null) {
        res.posts.content = req.body.content
    }

    try {
        const updatePost = await res.posts.save()
        res.status(200).json(updatePost)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }

})

async function getposts(req, res, next) {
    let singlepost;
    try {
        singlepost = await Posts.findById(req.params.id)
        if (singlepost == null) {
            return res.status(404).json({ message: 'Cannot find post' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message }) 
    }

    res.posts = singlepost
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
        req.user = user
        next()
    })
}



module.exports = router
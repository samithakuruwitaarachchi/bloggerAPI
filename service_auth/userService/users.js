const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const User = require('./models/userModel.js')
dotenv.config({path: './config.env'})

//create user
router.post('/create', async (req, res) => {

    console.log('create user called');

    try {

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })

        user.save()
        .then(()=> {
            res.status(201).json(user)
        })
        .catch((error) => {
            res.status(400).json({ message: error.message })
        })
 
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }

})

// user authentication
router.post('/auth', async (req, res) =>{

    const {email, password} = req.body

    if (email == "" || password == "") {
        res.status(403).json({message: 'Invalid username / password'})
    }else{
        const user = await User.findOne({email}).lean();

        if (!user) {
            res.status(403).json({message: 'Invalid username / password'})
        }

        if (password == user.password) {
            const token = jwt.sign({id: user._id, name: user.name, role: user.role}, process.env.JWTS)
            return res.status(201).json({data: token})
        }

        res.status(403).json({message: 'Invalid username / password'})

    }

    
   
})


module.exports = router
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:  {
        type: String,
        required: [true, 'Name is required']
      },
    password:  {
        type: String,
        required: [true, 'Password is required']
      },
    email:  {
        type: String,
        required: [true, 'email is required'],
        unique: true
      },
    role:  {
        type: String,
        default : 'user'
      },

},{collection:'users'});

module.exports = mongoose.model('Users', userSchema)
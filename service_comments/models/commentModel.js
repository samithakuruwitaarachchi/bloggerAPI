const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content:  {
        type: String,
        required: true
       },
       postID :  {
        type: String,
        required: true
       },
       authorID :  {
        type: String,
        required: true
       },
       createDate:  {
        type: String,
        required: true
       }, 
});

module.exports = mongoose.model('comments', commentSchema)
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
   title: {
    type: String,
    required: true
   },
   content:  {
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

module.exports = mongoose.model('Posts', postsSchema)
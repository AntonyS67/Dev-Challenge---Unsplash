const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    url:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Image',ImageSchema);
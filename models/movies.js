const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    // userId : {type : String},
    movieName : {type : String, required : true},
    description : {type : String},
    yearReleased : {type : Number, required : true},
    rating : {type : Number, required : true},
    actors : {type : Array, required : true},
    directors : {type : Array, required : true},
    imageUrl : {type : String}
})

const movie = module.exports = mongoose.model('movie',movieSchema)

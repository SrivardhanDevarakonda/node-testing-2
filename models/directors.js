const mongoose = require('mongoose')

const DirectorSchema = mongoose.Schema({
   directorName:{ 
        type:String, 
        required:true 
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    moviesDirected:{
        type:Array,
        required:true
    }
})

const Director = module.exports = mongoose.model('Director',DirectorSchema)
const mongoose = require('mongoose')

const ActorSchema = mongoose.Schema({
   actorName:{ 
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
    agent:{
        type:String
    },
    moviesActed:{
        type:Array,
        required:true
    }
})

const Actor = module.exports = mongoose.model('Actor',ActorSchema)
const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    userName : {type : String},
    password : {type : String}
})

const client = module.exports = mongoose.model('Client',clientSchema)

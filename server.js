const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const router = require('./routeDetails')

mongoose.connect('mongodb://127.0.0.1:27017/vardhan')
mongoose.connection.on('connected',()=>{
    console.log('Now connected to MONGODB at 27017...')
})
mongoose.connection.on('error',(error)=>{
   if(error) console.log('Error while connecting to MONGODB at 27017...')
}) 

app.use(cors())
app.use(bodyParser.json())
app.use('/sri',router)

app.use(express.static(path.join(__dirname,'angularStuff/src')))

app.get('/',(req,res)=>{
    res.send('Now Started...')
})

var server = app.listen(3000,()=>{
    console.log('now started at 3000...')
})

module.exports = server
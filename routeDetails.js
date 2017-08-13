const express = require('express')
const router = express.Router()
const Movie = require('./models/movies')
const Actor = require('./models/actors')
const Director = require('./models/directors')
const User = require('./models/users')
const mongojs = require('mongojs')

router.get('/movies',(req,res,next)=>{
    Movie.find((err,movies)=>{
        if(err)res.json({err:'error occured'})
        res.json(movies)
    })
})

router.get('/movies/:id',(req,res,next)=>{
    Movie.findById((req.params.id) ,(err,movies)=>{
        if(err)res.json({err:'error occured'})
        res.json(movies)
    }) 
})
//{_id:mongojs.ObjectId
router.post('/movies',(req,res,next)=>{
    let newMovie = new Movie({
        movieName : req.body.movieName,
        description : req.body.description,
        yearReleased : req.body.yearReleased,
        rating : req.body.rating,
        actors : req.body.actors,
        directors : req.body.directors,
        imageUrl : req.body.imageUrl
    })
    newMovie.save((err,movies)=>{
        if(err)res.json({msg:'Error occured while inserting movie details'})
        res.json({msg:'Movie details added Successfully'})
    })
})

router.post('/login',(req,res,next)=>{
    let userName = req.body.userName
    let password = req.body.password

    User.findOne({userName:userName, password:password}, (err,user)=>{
        if(err) return res.json({msg:'Error occurred while authenticating user!!',isValid:false});
        if(!user) return res.json({msg:'Username or password entered wrong!!',isValid:false});
          res.json({msg:'Valid user',isValid:true});
    })
})

router.post('/register',(req,res,next)=>{
    let newUser = new User({
        userName : req.body.userName,
        password : req.body.password
    })
    newUser.save((err,user)=>{
        if(err){
              return res.json({msg:'Error while creating User'})
        }
     res.json({msg:'New User created successfully'})
    })
})

router.put('/movies/:id',(req,res,next)=>{
    Movie.findByIdAndUpdate({_id : req.params.id},req.body,(err)=>{
    if(err) return res.json({msg:'Error while updating..'})
     else{
          Movie.findOne({_id:req.params.id},(err,movie)=>{
            res.json({msg:"Movie details updated successfully"})
          })
         }
    })
})

router.delete('/movies/:id',(req,res,next)=>{
    Movie.remove({_id : req.params.id},(err,movies)=>{
        if(err)res.json({err:'Error occured while deleting movie details'})
        res.json(movies)
    })
})




//actor operations.......

router.get('/actor',(req,res,next)=>{
    Actor.find(function(err,actors){
        res.json(actors)
    })
})

router.get('/actor/:actorName',(req,res,next) => {
    Actor.findOne({actorName:req.params.actorName}, function(err,actor){
        if(err) res.json(err)
        res.json(actor)
    })
})
router.post('/actor',(req,res,next)=>{
    let newActor = new Actor({
        actorName:req.body.actorName,
        age:req.body.age,
        gender:req.body.gender,
        agent:req.body.agent,
        moviesActed : req.body.moviesActed
    })
    newActor.save((err,actor)=>{
        if(err) res.json({msg : 'Failed to add new Actor'})
        else res.json({ msg: 'successfully actor added' })
    })
})

//for director .........
router.get('/director',(req,res,next)=>{
    Director.find(function(err,director){
        res.json(director)
    })
})

router.get('/director/:directorName',(req,res,next) => {
    Director.findOne({directorName:req.params.directorName}, function(err,director){
        if(err) res.json(err)
        res.json(director)
    })
})
router.post('/director',(req,res,next)=>{
    let newDirector = new Director({
        directorName:req.body.directorName,
        age:req.body.age,
        gender:req.body.gender,
        moviesDirected : req.body.moviesDirected
    })
    newDirector.save((err,director)=>{
        if(err) res.json({msg : 'Failed to add new director'})
        else res.json({ msg: 'successfully director added' })
    })
})




module.exports = router
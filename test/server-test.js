const chai = require('chai')
const chaiHttp = require('chai-http')

let server = require('../server')

let should = chai.should()
chai.use(chaiHttp)

describe('Test cases', () => {
   //GET
    it('should return all actors at /sri/actor', (done)=>{
        chai.request(server)
            .get('/sri/actor')
            .end((err,res)=>{
                res.should.have.status(200)
                res.should.be.json
                res.should.be.a('object')
                res.body[0].should.have.property('actorName')
                res.body[0].should.have.property('age')
                res.body[0].should.have.property('gender')
                res.body[0].should.have.property('agent')
                res.body[0].should.have.property('moviesActed')
                done()
            })
    })
    //POST
    it('should register new user at /sri/register',(done)=>{
        chai.request(server)
            .post('/sri/register')
            .send({'userName':'srivardhan','password':'12345'})
            .end((err,res)=>{
                res.should.have.status(200)
                res.should.be.json
                res.should.be.a('object')
                done()
            })
    })
    //PUT
    it('should update movie details at /sri/movies/id',(done)=>{
        chai.request(server)
            .get('/sri/movies')
            .end((err,res)=>{
                chai.request(server)
                    .put('/sri/movies/'+res.body[0]._id)
                    .send({'rating':'4','yearReleased':'2014'})
                    .end((err,response)=>{
                        response.should.have.status(200)
                        response.should.be.json
                        response.should.be.a('object')
                        done()
                    })
            })
    })
    //DELETE
    it('should delete movie at /sri/movies/id',(done)=>{
        chai.request(server)
            .get('/sri/movies')
            .end((err,res)=>{
                chai.request(server)
                    .delete('/sri/movies/'+res.body[0]._id)
                    .end((err,response)=>{
                        response.should.have.status(200)
                        response.should.be.json
                        done()
                    })
            })
    })
})
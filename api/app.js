const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
const moment = require('moment')
const path = require('path')
const User = require('./models/user')
const Patient = require('./models/patient')
const Encounter = require('./models/encounter')
const { O_CREAT } = require('constants')


//Connect to DB
// mongoose.connect('mongodb+srv://Nuel:chuks@cluster0.ldv66.mongodb.net/medicare?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
mongoose.connect('mongodb://localhost/medicare', {useNewUrlParser: true, useUnifiedTopology: true})


//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

app.post('/signup', (req, res)=>{
    User.findOne({username: req.body.username}, async (err, user)=>{
        if(err) throw err
        if(user){
            var c = {success:false, msg:"User already exists"}
            res.send(c)
        } 
        if(!user){
            var salt = await bcrypt.genSaltSync(10);
            var hash = await bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({
                username: req.body.username,
                password: hash,
                surname: req.body.surname,
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender,
                cadre: req.body.cadre,
                department: req.body.department
            })
            await newUser.save((err, reg)=>{

                Patient.find({handler: req.body.username}, (err, patientsList)=>{
                    Encounter.find({handler: req.body.username}, (err, encountersList)=>{
                        var c = {
                            success : true,
                            msg: "Login Successful",
                            username: reg.username,
                            id: reg._id,
                            patients: reg.patients.length,
                            patientsList: patientsList,
                            encounters: reg.encounters.length,
                            encountersList: encountersList
                        }
                        res.send(c)
                    })
                    
                })
            })  
        }
    })
})

app.post('/login', (req, res)=>{
    User.findOne({username: req.body.username}, (err, user)=>{
        if(err){
            var c = {
                success : false,
                message: "An unknown error occured",
            }
            res.send(c)
        }else if(!user) {
            var c = {
                success : false,
                message: "No User Found",
            }
            console.log(c)
            res.send(c)
        }else{
            password = user.password
            bcrypt.compare(req.body.password, password, (err, isMatch)=>{
                if(isMatch === true){
                    Patient.find({handler: req.body.username}, (err, patientsList)=>{
                        Encounter.find({handler: req.body.username}, (err,encountersList)=>{
                            var c = {
                                success : true,
                                message: "Login Successful",
                                username: user.username,
                                id: user._id,
                                patients: user.patients.length,
                                patientsList: patientsList,
                                encounters: user.encounters.length,
                                encountersList: encountersList
                            }
                            res.send(c)
                        })
                        
                    })         
                }else{
                    var c = {
                        success : false,
                        message: "Incorrect Password",
                    }
                    res.send(c)
            }
            })
        }
    })
})

app.post('/addpatient', (req, res)=>{
    User.findOne({username: req.body.user}, (err, user)=>{
        if(err) throw err
        Patient.find({surname: req.body.surname, name: req.body.name}, (err, data)=>{
            if(data.length != 0){
                console.log(data)
                res.send({success: false, message: 'Patient Already Exists'})
            }else if(data.length === 0 ){
                if(user){
                    Patient.create({
                        handler: req.body.user,
                        username: req.body.username,
                        surname: req.body.surname,
                        password: req.body.password,
                        name: req.body.name,
                        age: req.body.age,
                        gender: req.body.gender,
                        height: req.body.height,
                        weight: req.body.weight,
                        bmi: req.body.bmi,
                        ward: req.body.ward,
                        lga: req.body.lga,
                        state: req.body.state
                    }, (err, patient)=>{
                        console.log(patient)
                        user.patients.push(patient)
                        user.save(function(err, save){
                            if(err){
                                console.log(err);
                            }else{
                                Patient.find({handler: req.body.user}, (err, patientsList)=>{
                                    res.send({success: true, patients: user.patients.length, patientsList: patientsList})
                                })
                            }
                        });
                    })
                }
            }
        })
    })
})

app.post('/addencounter', (req, res)=>{
    User.findOne({username: req.body.user}, (err, user)=>{
        if(err) throw err
        Patient.findOne({surname: req.body.surname, name: req.body.name}, (err, data)=>{
            if(!data){
                res.send({message: 'Patient Does not Exist', success: false})
            }else if(data){
                if(user){
                    Encounter.create({
                        handler: req.body.user,
                        surname: req.body.surname,
                        name: req.body.name,
                        age: req.body.age,
                        gender: req.body.gender,
                        height: req.body.height,
                        weight: req.body.weight,
                        bmi: req.body.bmi,
                        type: req.body.type,
                        bp: req.body.bp,
                        temperature: req.body.temperature,
                        rr: req.body.rr,
                        complaint: req.body.complaint,
                        diagnosis: req.body.diagnosis,
                        treatment: req.body.treatment,
                    }, (err, encounter)=>{
                        console.log(encounter)
                        user.encounters.push(encounter)
                        user.save(function(err, save){
                            if(err){
                                console.log(err);
                            }else{
                                Encounter.find({handler: req.body.user}, (err, encountersList)=>{
                                    res.send({success: true, encounters: user.encounters.length, encountersList: encountersList})
                                })
                            }
                        });
                    })
                };
            }
        })
    })
})

app.get('*', (req, res)=>{
    res.redirect('/')
})

//Start server
app.listen(process.env.PORT || 5000, ()=>{
    console.log('Api Running')
})
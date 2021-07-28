const mongoose = require('mongoose')
const Patient = require('./patient')
const Encounter = require('./encounter')

//doctor schema
const user = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    surname: {
        type: String
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    cadre: {
        type: String
    },
    department: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    patients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        }
    ],
    encounters: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Encounter'
        }
    ]
})

module.exports = mongoose.model('User', user)
const mongoose = require('mongoose')
const Patient = require('./patient')

//doctor schema
const user = new mongoose.Schema({
    username: {
        type: String
    },
    surname: {
        type: String
    },
    password: {
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
    ]
})

module.exports = mongoose.model('User', user)
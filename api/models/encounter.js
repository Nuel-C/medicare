const mongoose = require('mongoose')

//encounter schema
const encounter = new mongoose.Schema({
    handler: {
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
    bmi: {
        type: String
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    type: {
        type: String
    },
    bp: {
        type: String
    },
    temperature: {
        type: Number
    },
    rr: {
        type: Number
    },
    complaint: {
        type: String
    },
    diagnosis: {
        type: String
    },
    treatment: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Encounter', encounter)
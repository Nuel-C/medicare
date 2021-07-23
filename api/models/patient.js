const mongoose = require('mongoose')

//patient schema
const patient = new mongoose.Schema({
    handler: {
        type: String
    },
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
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    bmi: {
        type: Number
    },
    ward: {
        type: String
    },
    lga: {
        type: String
    },
    state: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Patient', patient)
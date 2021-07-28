const mongoose = require('mongoose')
const Encounter = require('./encounter')


//patient schema
const patient = new mongoose.Schema({
    surname: {
        type: String
    },
    name: {
        type: String
    },
    handler: {
        type: String
    },
    username: {
        type: String
    },
    password: {
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
        type: String
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
    },
    // encounters: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Encounter'
    //     }
    // ]
})

module.exports = mongoose.model('Patient', patient)
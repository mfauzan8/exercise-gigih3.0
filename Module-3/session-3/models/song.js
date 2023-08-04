const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artists: {
        type: String,
        required: true
    },
    played: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Song', songSchema)
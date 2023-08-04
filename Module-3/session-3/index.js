require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js')

const app = express()
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL);
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('connected', () => {
    console.log('Connected to MongoDB')
})

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use('/api/v1', routes)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
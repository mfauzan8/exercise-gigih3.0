const express = require('express')
const router = express.Router()
const Song = require('../models/song')

router.post('/song', (req, res) => {
    const song = new Song({ 
        title: "Umbrella",
        artists: "Beyonce",
        played: 10
    })

    try {
        const songToSave = song.save()
        res.status(201).json(songToSave)
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
})

router.get('/song', async (req, res) => {
    try {
        const allSongs = await Song.find()
        res.status(200).json({
            songs: allSongs
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/song:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id)
        res.status(200).json({
            song
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.patch('song/:id', async (req, res) => {
    try {
        const { id } = req.params
        const payload = req.body
        const option = { new: true }

        const result = await Song.findByIdAndUpdate(
            id, payload, option
        )
        res.render(result)
    } catch (error) {
        error.message = error.message
    }
})

module.exports = router;
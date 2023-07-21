import express from "express";
import songs from "./songs.json" assert { type: "json" };

const app = express();

app.get("/songs/:id", (req, res) => {
    const { id } = req.params;

    const song = songs.filter((song => song.id === +id));

    if (song.length === 0) {
        return res.status(404).json({
            message: "song not found",
        });
    }
    res.json({
        data: song,
    });
});

app.get("/songs", (req, res) => {
    const { title, artists } = req.query;
    let data = [];

    const { authorization } = req.headers;

    if (authorization != "fauzan") {
        return res.status(403).json({
            message: "Forbidden to access resources",
        });
    }

    if (artists && title) {
        data = songs.filter(song =>
            song.artists.some(artist =>
                artist.toLowerCase().includes(artists.toLowerCase())) && song.title.includes(title))
    } else if (artists) {
        data = songs.filter(song =>
            song.artists.some(artist =>
                artist.toLowerCase().includes(artists.toLowerCase())));
    } else if (title) {
        data = songs.filter((song) => song.title.includes(title))
    } else {
        data = songs;
    }

    if (data.length === 0) {
        return res.status(404).json({
            message: "song not found",
        });
    }

    res.json({
        data: data,
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
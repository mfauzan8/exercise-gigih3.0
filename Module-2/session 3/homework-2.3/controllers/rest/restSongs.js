import {
    getSongsByIDUsecase,
    getAllSongsUsecase,
    createSongUsecase
} from "../../usecases/songs/usecaseSongs.js"

export const playByID = (req, res) => {
    const { id } = req.params;

    const song = getSongsByIDUsecase(id);

    if (!song) {
        return res.status(404).json({
            message: "Song not found"
        });
    }

    res.json({
        data: song,
    });
};

export const allSongs = async (req, res) => {
    try {
        const songs = await getAllSongsUsecase();
        res.status(200).json(songs);
    } catch (err) {
        res.status(500).json({ err: 'Internal Server Error' });
    }
}

export const createSong = async (req, res) => {
    const { title, artists, album } = req.body;
    try {
        const newSong = await createSongUsecase(title, artists, album);
        res.status(201).json(newSong);
    } catch (err) {
        res.status(500).json({ err: 'Internal Server Error' });
    }
}

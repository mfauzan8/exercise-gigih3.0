import {
    getAllPlaylistUsecase,
    createPlaylistUsecase,
    addSongtoPlaylistUsecase
} from "../../usecases/playlist/usecasePlaylist.js"


export const allplaylist = async (req, res) => {
    try {
        const playlist = await getAllPlaylistUsecase();
        res.status(200).json(playlist);
    } catch (err) {
        res.status(500).json({ err: 'Internal Server Error' });
    }
}

export const createPlaylist = async (req, res) => {
    const { name } = req.body;
    try {
        const newPlaylist = await createPlaylistUsecase(name);
        res.status(201).json({ message: "Playlist created successfully", playlist: newPlaylist });

    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}

export const addSongToPlaylist = async (req, res) => {
    const { idPlaylist, id } = req.params;
    try {
        const playlist = await addSongtoPlaylistUsecase(idPlaylist, id);
        res.status(200).json({ message: "Success add Song", playlist });
    } catch (err) {
        res.status(500).json({ err: 'Internal Server Error' });
    }
}
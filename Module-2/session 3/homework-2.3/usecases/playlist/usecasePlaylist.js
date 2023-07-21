import {
    getAllPlaylistRepo,
    createPlaylistRepo,
    getPlaylistByIDRepo,
} from "../../repositories/playlists/playlistRepo.js"
import { getSongByIDRepo } from "../../repositories/songs/songRepo.js";

export const getAllPlaylistUsecase = async () => {
    try {
        const playlist = await getAllPlaylistRepo();
        return playlist;
    } catch (error) {
        throw error;
    }
}

export const createPlaylistUsecase = async (name) => {
    try {
        const newPlaylist = await createPlaylistRepo(name);
        return newPlaylist;
    } catch (error) {
        throw error;
    }
}

export const addSongtoPlaylistUsecase = (idPlaylist, id) => {
    const playlist = getPlaylistByIDRepo(idPlaylist);
    const song = getSongByIDRepo(id);

    // check if the song is in the playlist
    const checkSong = playlist.songs.find(song => song.id === +id);

    if (!checkSong) {
        playlist.songs.push(song);
        return playlist
    }
    throw new Error('song already');
}
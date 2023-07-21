import {
    getSongByIDRepo,
    getAllSongsRepo,
    createSongRepo
} from "../../repositories/songs/songRepo.js"

export const getSongsByIDUsecase = (id) => {
    const song = getSongByIDRepo(id);
    if (!song) {
        return null
    }

    const playCount = song.playCount += 1;
    return ({ ...song, playCount });
}

export const getAllSongsUsecase = async () => {
    try {
        const songs = await getAllSongsRepo();
        const sortSongs = songs.sort((a, b) => b.playCount - a.playCount);
        return sortSongs;
    } catch (error) {
        throw error;
    }
}

export const createSongUsecase = async (title, artists, album) => {
    try {
        const newSong = await createSongRepo(title, artists, album);
        return newSong;
    } catch (error) {
        throw error;
    }
};
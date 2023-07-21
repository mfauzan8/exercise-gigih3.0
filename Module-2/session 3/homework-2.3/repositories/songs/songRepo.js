import songs from "./json/songs.json" assert {type: "json"}

export const getSongByIDRepo = (id) => {
    const song = songs.find((song) => song.id === +id)
    return (song)
}

export const getAllSongsRepo = async () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(songs);
        } catch (error) {
            reject(error);
        }
    });
}

export const createSongRepo = (title, artists, album) => {
    return new Promise((resolve, reject) => {
        try {
            const idSong = songs.length + 1;

            const newSong = {
                id: idSong,
                title: title,
                artists: artists,
                album: album,
                playCount: 0,
            };

            songs.push(newSong);
            resolve(newSong);
        } catch (error) {
            reject(error);
        }
    });
};


import playlist from "./json/playlist.json" assert {type: "json"}

export const getAllPlaylistRepo = async () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(playlist);
        } catch (error) {
            reject(error);
        }
    });
}

export const createPlaylistRepo = (name) => {
    return new Promise((resolve, reject) => {
        try {
            const id = playlist.length + 1;

            const newPlaylist = {
                id: id,
                name: name,
                songs: []
            };

            playlist.push(newPlaylist);
            resolve(newPlaylist);
        } catch (error) {
            reject(error);
        }
    });
}

export const getPlaylistByIDRepo = (idPlaylist) => {
    const list = playlist.find((playlist) => playlist.id === +idPlaylist)
    return (list)
}
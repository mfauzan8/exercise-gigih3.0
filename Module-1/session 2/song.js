let songList = [
    { title: "Song 1", artists: [{ name: "artist 1" }], duration: 100 },
    { title: "Song 2", artists: [{ name: "artist 2" }], duration: 200 }
];

const songPromise = (time) => new Promise((resolve, reject) => {
    const song = Math.random();
    if (song < 0.2) {
        reject('Song not found');
    } else {
        setTimeout(resolve(songList), time);
    }
});

songPromise(2000)
    .then((response) => {
        console.log(response);
    }).catch((err) => console.log(err.message));

const songAsync = async () => {
    try {
        const response = await songPromise(2000);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
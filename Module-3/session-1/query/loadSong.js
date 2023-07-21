db = connect('mongodb://localhost:27017/spotify');
db.songs.insertMany([
    {
        "title": "You",
        "artists": [
            "artists 1"
        ],
        "album": "album 1"
    },
    {
        "title": "Dance",
        "artists": [
            "artists 2"
        ],
        "album": "album 3"
    },
    {
        "title": "Lights",
        "artists": [
            "artists 3"
        ],
        "album": "album 2"
    },
    {
        "title": "Now",
        "artists": [
            "artists 2"
        ],
        "album": "album 1"
    },
    {
        "title": "Up",
        "artists": [
            "artists 1",
            "artists 4"
        ],
        "album": "album 5"
    },
    {
        "title": "One",
        "artists": [
            "artists 3"
        ],
        "album": "album 4"
    },
    {
        "title": "Good",
        "artists": [
            "artists 2"
        ],
        "album": "album 5"
    },
    {
        "title": "Like",
        "artists": [
            "artists 5",
            "artists 1"
        ],
        "album": "album 6"
    },
    {
        "title": "Brother",
        "artists": [
            "artists 5",
            "artists 3"
        ],
        "album": "album 3"
    },
    {
        "title": "Fun",
        "artists": [
            "artists 4",
            "artists 2"
        ],
        "album": "album 4"
    }
])
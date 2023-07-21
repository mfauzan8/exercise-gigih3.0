db = connect('mongodb://localhost:27017/spotify');
db.popular_song.insertMany([
    {
        "title": "You",
        "playCount": 100,
        "period": "2022-04"
    },
    {
        "title": "Dance",
        "playCount": 150,
        "period": "2022-06"
    },
    {
        "title": "Lights",
        "playCount": 80,
        "period": "2020-07"
    },
    {
        "title": "Now",
        "playCount": 120,
        "period": "2021-05"
    },
    {
        "title": "Up",
        "playCount": 90,
        "period": "2021-09"
    },
    {
        "title": "One",
        "playCount": 200,
        "period": "2019-02"
    },
    {
        "title": "Good",
        "playCount": 50,
        "period": "2023-07"
    },
    {
        "title": "Like",
        "playCount": 300,
        "period": "2021-03"
    },
    {
        "title": "Brother",
        "playCount": 70,
        "period": "2022-02"
    },
    {
        "title": "Fun",
        "playCount": 180,
        "period": "2020-01"
    }
])

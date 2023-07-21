db = connect('mongodb://localhost:27017/spotify');
db.artists.insertMany([
    {
        "name": "artists 1",
        "dateOfBirth": "1990-01-01",
        "genres": [
            "Pop"
        ]
    },
    {
        "name": "artists 2",
        "dateOfBirth": "1985-03-15",
        "genres": [
            "Rock"
        ]
    },
    {
        "name": "artists 3",
        "dateOfBirth": "1995-07-10",
        "genres": [
            "Hip Hop"
        ]
    },
    {
        "name": "artists 4",
        "dateOfBirth": "1988-11-25",
        "genres": [
            "Pop",
            "R&B"
        ]
    },
    {
        "name": "artists 5",
        "dateOfBirth": "1992-09-05",
        "genres": [
            "Rock",
            "Indie"
        ]
    },
    {
        "name": "artists 6",
        "dateOfBirth": "1982-04-20",
        "genres": [
            "Hip Hop",
            "Rap"
        ]
    },
    {
        "name": "artists 7",
        "dateOfBirth": "1998-06-12",
        "genres": [
            "Jazz"
        ]
    },
    {
        "name": "artists 8",
        "dateOfBirth": "1975-12-03",
        "genres": [
            "Rock"
        ]
    },
    {
        "name": "artists 9",
        "dateOfBirth": "1993-02-18",
        "genres": [
            "Pop",
            "Dance"
        ]
    },
    {
        "name": "artists 10",
        "dateOfBirth": "1989-10-30",
        "genres": [
            "Rock"
        ]
    }
])
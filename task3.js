

class Movie {
    constructor(title, studio, rating ="PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
function getPG(movieArray) {
    return movieArray.filter(movie => movie.rating === "PG");
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(casinoRoyale);

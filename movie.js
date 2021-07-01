const searchMovie = document.getElementById('searchMovie');
const searchMovieForm = document.getElementById('movieForm');


class MovieDatabase {
    constructor() {
        this.apiKey = 'k_D1b94Yy4';
    }

async getMovie() {
        const movieResponse = await fetch(`https://imdb-api.com/en/API/SearchMovie/${this.apiKey}/${searchMovie.value}`);

        const movie = await movieResponse.json();
        return {
            movie
        }
    }
}

class PopularMovies {
    constructor() {
        this.apiKey = 'k_D1b94Yy4';
    }

async getPopularMovie() {
        const popularmovie = await fetch(`https://imdb-api.com/API/MostPopularMovies/${this.apiKey}`);

        const movieList = await popularmovie.json();
        return {
            movieList
        }
    }
}

class PopularShows {
    constructor() {
        this.apiKey = 'k_D1b94Yy4';
    }

async getPopularShow() {
        const popularshow = await fetch(`https://imdb-api.com/API/MostPopularTVs/${this.apiKey}`);

        const showList = await popularshow.json();
        return {
            showList
        }
    }
}

class TheatreMovies {
    constructor() {
        this.apiKey = 'k_D1b94Yy4';
    }

async getTheatreMovies() {
        const theatreMovies = await fetch(`https://imdb-api.com/API/InTheaters/${this.apiKey}`);

        const showList = await theatreMovies.json();
        return {
            showList
        }
    }
}



// class MovieSites {
//     constructor() {
//         this.apiKey = 'k_e89k81xH';
//     }

// async getMovieLink() {
//         const movieLink = await fetch(`https://imdb-api.com/API/ExternalSites/${this.apiKey}/${data.movie.results.id}, `);
//         // const movieSite = await fetch(`https://imdb-api.com/API/ExternalSites/${this.apiKey}/${data.movie.results.id}`);

//         const movie = await movieLink.json();
//         return {
//             movie
//         }
//     }
// }
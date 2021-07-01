class UI {
    constructor() {
        this.results = document.getElementById('movieList');
        this.popular = document.getElementById('popular-movies');
        this.popularShows = document.getElementById('popular-shows');
        this.theatreMovies = document.getElementById('theatre-movies');
    }

    showMovies(movies) {
        let output = '';
        movies.forEach(function(movie) {
            output += `
            <div class="col-md-3">
                    <div class="card card-body mb-3">
                        <img style="height: 250px; width: 100%; display: block;" src="${movie.image}" alt="${movie.image} image">
                        <h5 class="card-header card-title mb-3">${movie.title}</h5>

                        <hp class="card-subtitle text-muted">${movie.description}<p>
                    </div>
                    </div>
            
            `
        })
        this.results.innerHTML = output;
    }

    showTheatreMovies(theatre) {
        let output = '';
        let total = 10;
        theatre.slice(0, total).forEach(function(movie) {
            output += `
            <div class="col-lg-4 col-md-6">
            <div class="card card-body mb-2">
                <img class="rounded" style="height: 410px; width: 100%; display: block;" src="${movie.image}" alt="${movie.image} image">
                <h5 class="card-header card-title mb-3">${movie.fullTitle}</h5>

                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <p class="card-subtitle text-muted">${movie.plot}</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Stars: <p class="card-subtitle text-muted text-right">${movie.stars}</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Directors: <p class="card-subtitle text-muted">${movie.directors}</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Metacritic Rating: <span class="badge badge-warning badge-pill">${movie.metacriticRating}</span>
                </li> 
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Runtime: <span class="badge badge-info">${movie.runtimeStr}</span>
                </li> 
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Genres: <p class="card-subtitle text-muted">${movie.genres}</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Release State: <p class="card-subtitle text-muted">${movie.releaseState}</p>
                </li>

            </div>
            </div>
            `
        })
        this.theatreMovies.innerHTML = output;
    }

    showPopularMovies(popular) {
        let output = '';
        let total = 100;
        popular.slice(0, total).forEach(function(movie) {
            output += `
            <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-body mb-2">
                <img class="rounded" style="height: 250px; width: 100%; display: block;" src="${movie.image}" alt="${movie.image} image">
                <h5 class="card-header card-title mb-3">${movie.title}</h5>

                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Release Year: <p class="card-subtitle text-muted">${movie.year}</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Rank: <span class="badge badge-primary badge-pill ml-auto mr-2">${movie.rank}</span><span class="rankUpDown">${movie.rankUpDown}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                IMDB Rating: <span class="badge badge-warning badge-pill">${movie.imDbRating}</span>
                </li> 
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <p class="card-subtitle text-muted">${movie.crew}</p>
                </li>

            </div>
            </div>
            `
        })
        this.popular.innerHTML = output;

        let rank = document.querySelectorAll('.rankUpDown');

        rank.forEach(item => {
            if(item.innerHTML.includes("+")) {
                item.style.color = "limegreen";
            } else if(item.innerHTML.includes("-")){
                item.style.color = "#f2003c";
            } else {
                item.style.color = "white";
            }
        })

    }


    showPopularShow(popular) {
        let output = '';
        let total = 100;
        popular.slice(0, total).forEach(function(show) {
            output += `
            <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-body mb-2">
                <img class="rounded" style="height: 250px; width: 100%; display: block;" src="${show.image}" alt="${show.image} image">
                <h5 class="card-header card-title mb-3">${show.title}</h5>

                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Release Year: <p class="card-subtitle text-muted">${show.year}</p>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Rank: <span class="badge badge-primary badge-pill ml-auto mr-2">${show.rank}</span><span class="rankUpDown2">${show.rankUpDown}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                IMDB Rating: <span class="badge badge-warning badge-pill">${show.imDbRating}</span>
                </li> 
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <p class="card-subtitle text-muted">${show.crew}</p>
                </li>

            </div>
            </div>
            `
        })
        this.popularShows.innerHTML = output;

        let rank = document.querySelectorAll('.rankUpDown2');

        rank.forEach(item => {
            if(item.innerHTML.includes("+")) {
                item.style.color = "limegreen";
            } else if(item.innerHTML.includes("-")){
                item.style.color = "#f2003c";
            } else {
                item.style.color = "white";
            }
        })
    }
}




            // <ul class="list-group">
            // <li class="list-group-item d-flex justify-content-between align-items-center">
            // <a href="#" target="_blank">${movie.title}</a>
            //   <span class="badge badge-warning badge-pill">${movie.imDbRating}</span>
            // </li> 
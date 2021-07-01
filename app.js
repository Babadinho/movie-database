const movies = new MovieDatabase;
const popular = new PopularMovies;
const popularShows = new PopularShows;
const theatreMovies = new TheatreMovies;
const ui = new UI;

searchMovieForm.addEventListener('submit', (e) => {
    const movieText = e.target.value;

    if(movieText !== ''){
        movies.getMovie(movieText)
        .then(data => {
            console.log(data.movie.results);
            ui.showMovies(data.movie.results);
        })
    }
    e.preventDefault();

})


popular.getPopularMovie()
.then(data => {
    console.log(data.movieList.items);
    ui.showPopularMovies(data.movieList.items);
})


popularShows.getPopularShow()
.then(data => {
    console.log(data);
    ui.showPopularShow(data.showList.items);
})

theatreMovies.getTheatreMovies()
.then(data => {
    console.log(data);
    ui.showTheatreMovies(data.showList.items);
})
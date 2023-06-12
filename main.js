const form = document.getElementById('genre-form');
const movieContainer = document.getElementById('movie-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    movieContainer.innerHTML = '';

    const selectedGenre = form.genre.value;
    const apiKey = '62e68f89f617adc597c43d99a33ed737';

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}`)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;

            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');

                const movieTitle = document.createElement('h2');
                movieTitle.textContent = movie.title;

                const moviePoster = document.createElement('img');
                moviePoster.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
                moviePoster.alt = movie.title;

                const movieOverview = document.createElement('p');
                movieOverview.textContent = movie.overview;

                movieCard.appendChild(movieTitle);
                movieCard.appendChild(moviePoster);
                movieCard.appendChild(movieOverview);

                movieContainer.appendChild(movieCard);
            });
        })
        .catch(error => console.log(error));
});
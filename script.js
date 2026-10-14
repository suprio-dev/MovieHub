const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");


movieForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let query = movieInput.value.trim();
  if (!query) {
    return;
  }
  // console.log(query);
  searchMovies(query);
})


// search movies

async function searchMovies(movieName) {

  movieHub.innerHTML = `<div class="loader"></div> `

  let response = await fetch(`https://www.omdbapi.com/?apikey=1d269c6e&s=${encodeURIComponent(movieName)}`); // fixed the '&' encoding issue
  let data = await response.json();
  console.log(data);

  if (data.Response === "True") {
    displayMovies(data.Search);
  } else {
    movieHub.innerHTML = `<p>${data.Error}</p>`
  }


}

// display movies

function displayMovies(movies) {
  movieHub.innerHTML = "";
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.dataset.imdbID = movie.imdbID;
    div.setAttribute("class", "movie-card");


    div.innerHTML = `<div>
    <div>
      <img src="${movie.Poster}" alt="">
    </div>
    <div>
      <p>${movie.Title}</p>
      <p>${movie.Year}</p>
    </div>
  </div>`;



    movieHub.append(div);
  })
}

// opening movie-details page

movieHub.addEventListener('click', (e) => {
  e.stopPropagation();
  const movieCard = e.target.closest(".movie-card");
  const imdbID = movieCard.dataset.imdbID;
  // console.log(imdbID);
  location.href = `movie-details.html?id=${imdbID}`;


})

// showing default movies

function defaultMovies() {
  const showMovies = [
    { Title: 'The Dark Knight', Year: '2008', imdbID: 'tt0468569', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg' },
    { Title: 'The Dark Knight Rises', Year: '2012', imdbID: 'tt1345836', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg' },
    { Title: 'Insidious', Year: '2011', imdbID: 'tt1591095', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_QL75_UY562_CR0,0,380,562_.jpg' },
    { Title: 'Jumanji: Welcome to the Jungle', Year: '2017', imdbID: 'tt2283362', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZjI5MzdmODctYjA4NS00ZmMxLWJlOWUtOGVhMjA0OGMxMWYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg' },
    { Title: 'Interstellar', Year: '2014', imdbID: 'tt0816692', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg' },
    { Title: 'Inception', Year: '2010', imdbID: 'tt1375666', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg' },
    { Title: 'Inception: The Cobol Job', Year: '2010', imdbID: 'tt5295894', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg' },
    { Title: 'Spider-Man: Homecoming', Year: '2017', imdbID: 'tt2250912', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_QL75_UX380_CR0,0,380,562_.jpg' },
    { Title: 'Spider-Man: Far from Home', Year: '2019', imdbID: 'tt6320628', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg' },
    { Title: 'Avengers: Endgame', Year: '2019', imdbID: 'tt4154796', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg' }
  ]

  displayMovies(showMovies);

}

defaultMovies();
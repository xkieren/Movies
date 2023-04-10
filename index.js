const spinnerEl = document.querySelector(".fa-spinner");
const searchEl = document.querySelector(".fa-search")
const searchBtn = document.getElementById("search__btn");
searchBtn.addEventListener("click", Search);


async function displayDefaultMovies() {
  const movies = await fetch("https://www.omdbapi.com/?apikey=47acb015&y=&s=movie");
  const moviesData = await movies.json();
  const movieListEl = document.querySelector(".movie__list");
  movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
  spinnerEl.style.display = "none"


}

async function Search() {
  const searchQuery = document.getElementById("search").value;
  localStorage.setItem("searchQuery", searchQuery);
  spinnerEl.style.display = "block"; // Show spinner before movies are loaded
  searchEl.style.display = "none"

  const movies = await fetch(`https://www.omdbapi.com/?apikey=47acb015&s=${searchQuery}`);
  const moviesData = await movies.json();
  const movieListEl = document.querySelector(".movie__list");
  
  setTimeout (() => {
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
    spinnerEl.style.display = "none"
    searchEl.style.display = "block"

  }, 1500);

  }



async function main() {
  await displayDefaultMovies();
}

main();

function movieHTML (movie) {
  return `<div class="movie__card" onclick="showSearchInput('${movie.Title}')"
    <div class="movie__card__container">
      <figure>
        <img src="${movie.Poster}" class="movie__poster__wrapper" alt="">
      </figure> 
      <p>${movie.Title} (${movie.Year})</p>
    </div>
  </div>`
}



// async function main() {
//   const movies = await fetch("https://www.omdbapi.com/?apikey=47acb015&y=&s=movie");
//   const moviesData = await movies.json();
//   const movieListEl = document.querySelector(".movie__list");

//   movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
   
 
// }
// main();

// function movieHTML (movie) {
// return `<div class="movie__card onclick="search__bar"(${movie})">
//   <div class="movie__card__container">
//   <figure>
//   <img src="${movie.Poster}" class="movie__poster__wrapper" alt="">
//   </figure> 
//   <p>${movie.Title} (${movie.Year})</p>
//   <p>Type: ${movie.Type}</p>
//   </div>
//   </div>`
// }

// async function movieSearch (event) {
//   const searchInput = event.target.value

//   const fetchMovie = await fetch (`https://www.omdbapi.com/?apikey=47acb015&y=&s=${searchInput}`)

// }
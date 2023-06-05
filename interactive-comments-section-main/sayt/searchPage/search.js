const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a49d936b65d15a747ceb1fb87152dfeb&page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=a49d936b65d15a747ceb1fb87152dfeb&query="';

const filmSearchDiv = document.querySelector(".filmMain");
const search = document.getElementById("search");
const filmContainer = document.querySelector(".filmMainLeftContainers");
getmovies(API_URL);

async function getmovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}
function showMovies(movies) {
  filmContainer.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average , overview } = movie;

    console.log(overview)
    const movieEl = document.createElement("div");
    movieEl.classList.add("filmMainLeftContainer");

    movieEl.innerHTML = `
					  <div class="leftContainer">
						  <img class="filmMainLeftImg"
							  src="${IMAGE_PATH + poster_path}" alt="${title}">
					  </div>
					  <div class="filmMainLeftContent">
						  <p>${title}</p>
						  <span class="filmMainLeftPoint">${Math.ceil(vote_average * 10) / 10}</span>
						  <span class="filmMainLeft4k">4K</span>
						  <ion-icon name="play-circle-outline" class="filmLeftMainPlayer"></ion-icon>
	  `;
    filmContainer.appendChild(movieEl);
  });
}

filmSearchDiv.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getmovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
// *******************************************
const katoqoriEl = document.querySelector(".filmKateqoriyaButtons");

const genres = [
  {
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ],
  },
];

var selectedGenre = [];
setGenre();
function setGenre() {
  katoqoriEl.innerHTML = "";

  genres.forEach((genre) => {
    genre.genres.forEach((genre) => {
      const t = document.createElement("div");
      t.classList.add("filmKatoqoriyaButton");

      t.id = genre.id;
      t.innerText = genre.name;

      katoqoriEl.append(t);

      t.addEventListener("click", () => {
        if (selectedGenre === 0) {
          selectedGenre.push(genre.id);
        } else {
          if (selectedGenre.includes(genre.id)) {
            selectedGenre.forEach((id, idx) => {
              if (id == genre.id) {
                selectedGenre.splice(idx, 1);
              }
            });
          } else {
            selectedGenre.push(genre.id);
          }
        }
        getmovies(API_URL + "&with_genres=" + selectedGenre);
      });
      highlightSelection();
    });
  });
}

function highlightSelection() {
  const katButtons = document.querySelectorAll(".filmKatoqoriyaButton");
  const X = document.getElementById("X");

  katButtons.forEach((but) => {
    but.addEventListener("click", () => {
        but.classList.toggle("highlight");
    });
  });
}

// ************
const containers = [
  ...document.querySelectorAll(".filmSliderContainersss", ".newReleaseCarts"),
];
const nextButton = [...document.querySelectorAll(".iconR", ".iconRR")];
const prevButton = [...document.querySelectorAll(".iconL", ".iconRL")];

containers.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nextButton[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevButton[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

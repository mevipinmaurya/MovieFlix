const API_KEY = "api_key=f291ee898cccf5b1490b5c5997a4966d";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;        // Popular movie list
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";


const main = document.getElementById('main-wrapper');
const ratedWrapper = document.getElementById('rated-wrapper');
const upcomingMovies = document.getElementById("upcoming-movies");
const trendingMovies = document.getElementById("trending-movies");


const getTrendingMovies = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    showTrendingMovies(data.results);
}

const getPopularMovies = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    showPopularMovies(data.results);
}

const getRatedMovies = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    showRatedMovies(data.results);
}

const getUpcomingMovies = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    showUpcomingMovies(data.results);
}


// For Trending Movies
const trending_url = BASE_URL + "/movie/now_playing?language=en-US&page=1&" + API_KEY;
getTrendingMovies(trending_url);

// For Popular Movies
getPopularMovies(API_URL);

// For Top Rated Movies
const rated_url = BASE_URL + "/movie/top_rated?language=en-US&page=1&" + API_KEY;
getRatedMovies(rated_url);

// For Upcoming Movies
const upcoming_url = BASE_URL + "/movie/upcoming?language=en-US&page=1&" + API_KEY;
getUpcomingMovies(upcoming_url);



const showTrendingMovies = (data) => {
    trendingMovies.innerText = "";
    data.forEach(movie => {
        const { title, poster_path, vote_average, release_date } = movie;
        let newTitle = "";
        if (title.length >= 15) {
            let titleArr = title.split(" ");
            newTitle = titleArr.splice(0, 3).join(" ").concat(".....");
        }
        else {
            newTitle = title;
        }
        let movieBoxes = document.createElement('div');
        movieBoxes.classList.add("movie-boxes");
        movieBoxes.innerHTML = `
        
                <div class="box">
                    <div class="img">
                        <img src="${poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/200x230"}" alt="${title}">
                    </div>
                    <div class="movie-details">
                        <div class="movie-name">
                            <p>${newTitle}</p>
                        </div>
                        <div class="release-rating">
                            <div class="rating">
                                <p><i class="fa-solid fa-star ${ratingColor(vote_average)}"></i> ${vote_average.toFixed(1)}</p>
                            </div>
                            <div class="release-year">
                                <p>${release_date}</p>
                            </div>
                        </div>
                    </div>
        
        `

        trendingMovies.appendChild(movieBoxes);
    });
}


const showPopularMovies = (data) => {
    main.innerText = "";
    data.forEach(movie => {
        const { title, poster_path, vote_average, release_date } = movie;
        let newTitle = "";
        if (title.length >= 15) {
            let titleArr = title.split(" ");
            newTitle = titleArr.splice(0, 3).join(" ").concat(".....");
        }
        else {
            newTitle = title;
        }
        let movieBoxes = document.createElement('div');
        movieBoxes.classList.add("movie-boxes");
        movieBoxes.innerHTML = `
        
                <div class="box">
                    <div class="img">
                        <img src="${poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/200x230"}" alt="${title}">
                    </div>
                    <div class="movie-details">
                        <div class="movie-name">
                            <p>${newTitle}</p>
                        </div>
                        <div class="release-rating">
                            <div class="rating">
                                <p><i class="fa-solid fa-star ${ratingColor(vote_average)}"></i> ${vote_average.toFixed(1)}</p>
                            </div>
                            <div class="release-year">
                                <p>${release_date}</p>
                            </div>
                        </div>
                    </div>
        
        `

        main.appendChild(movieBoxes);
    });
}


const showRatedMovies = (data) => {
    ratedWrapper.innerText = "";
    data.forEach(movie => {
        const { title, poster_path, vote_average, release_date } = movie;
        let newTitle = "";
        if (title.length >= 15) {
            let titleArr = title.split(" ");
            newTitle = titleArr.splice(0, 3).join(" ").concat(".....");
        }
        else {
            newTitle = title;
        }
        let movieBoxes = document.createElement('div');
        movieBoxes.classList.add("movie-boxes");
        movieBoxes.innerHTML = `
        
                <div class="box">
                    <div class="img">
                        <img src="${poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/200x230"}" alt="${title}">
                    </div>
                    <div class="movie-details">
                        <div class="movie-name">
                            <p>${newTitle}</p>
                        </div>
                        <div class="release-rating">
                            <div class="rating">
                                <p><i class="fa-solid fa-star ${ratingColor(vote_average)}"></i> ${vote_average.toFixed(1)}</p>
                            </div>
                            <div class="release-year">
                                <p>${release_date}</p>
                            </div>
                        </div>
                    </div>
        
        `

        ratedWrapper.appendChild(movieBoxes);
    });
}

const showUpcomingMovies = (data) => {
    upcomingMovies.innerText = "";
    data.forEach(movie => {
        const { title, poster_path, vote_average, release_date } = movie;
        let newTitle = "";
        if (title.length >= 15) {
            let titleArr = title.split(" ");
            newTitle = titleArr.splice(0, 3).join(" ").concat(".....");
        }
        else {
            newTitle = title;
        }
        let movieBoxes = document.createElement('div');
        movieBoxes.classList.add("movie-boxes");
        movieBoxes.innerHTML = `
        
                <div class="box">
                    <div class="img">
                        <img src="${poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/200x230"}" alt="${title}">
                    </div>
                    <div class="movie-details">
                        <div class="movie-name">
                            <p>${newTitle}</p>
                        </div>
                        <div class="release-rating">
                            <div class="rating">
                                <p><i class="fa-solid fa-star ${ratingColor(vote_average)}"></i> ${vote_average.toFixed(1)}</p>
                            </div>
                            <div class="release-year">
                                <p>${release_date}</p>
                            </div>
                        </div>
                    </div>
        
        `

        upcomingMovies.appendChild(movieBoxes);
    });
}

const ratingColor = (rating) => {
    if (rating >= 8)
        return 'green';
    else if (rating >= 5)
        return 'yellow';
    else
        return 'red';
}
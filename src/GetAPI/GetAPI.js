import axios from 'axios';
const BaseURL = 'https://api.themoviedb.org/3/';
const APIkey = '62527f4fbcbc619de4f3bda00e915376';
const page = '12';

export async function GetDataMovies() {
  const res = await axios.get(
    `${BaseURL}discover/movie?sort_by=popularity.desc&api_key=${APIkey}&page=${page}&language=en-US&include_adult=false`
  );
  return res.data.results;
}

export async function GetSearchMovies(search) {
  const res = await axios.get(
    `${BaseURL}search/movie?api_key=${APIkey}&page=1&query=${search}`
  );

  return res.data.results;
}

export async function GetMoviesByID(id) {
  const res = await axios.get(
    `${BaseURL}movie/${id}?language=en-US&api_key=${APIkey}`
  );
  return res;
}

export async function GetMoviesByDetailed(id) {
  const response = await axios.get(
    `${BaseURL}movie/${id}/credits?api_key=${APIkey}&language=en-US`
  );
  return response;
}

export async function GetMoviesReviews(id) {
  const response = await axios.get(
    `${BaseURL}movie/${id}/reviews?api_key=${APIkey}&language=en-US&page=1`
  );
  return response;
}



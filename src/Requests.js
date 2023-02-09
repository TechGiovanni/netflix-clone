// this will allow us to fetch the information 
// firstly api key
// typically we would store in hidedn envirenment{process.env.API_KEY}
// then we go ahead and make a request variable. all the different endpoints TMDB gives us
// these are the different requests that can be made
// this is concatinating the API_KEY inside of the URL
// so it will basicallly look like this:
// https://api.themoviedb.org/3/trending/all/week?api_key=68351eafb3b4e89d03411d908669ffdf&language=en-US
// this above will be our final request that will be sent to IMDB.
// if you paste this in the url of google you will see al the movies in json format


const API_KEY = "68351eafb3b4e89d03411d908669ffdf";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
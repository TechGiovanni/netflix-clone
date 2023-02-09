import axios from 'axios'

// we make a request to TMDB 
// Frontend netflix-clone -> API (GET,POST) -> Backend TMDB
// in order to use TMDB's API we need to use a secret key called (API key (v3 auth))
// we use the key to authenticate ourselves, so it knows it who the request came from
// were basically saying to TMDB, give me some movies. then TMDB will respond
// Frontend netflix-clone <- Respond with movies <- Backend TMDB
// we just run "yarn add axios" or "npm install axios"
// then we initialize axios with const instance...
// then we create a file called requestAnimationFrame.js 

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

export default instance;
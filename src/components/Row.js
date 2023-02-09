import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request; // with any async we should always return something
    }
    fetchData();
  }, [fetchUrl]); 
  // the dependency is called the fetch Url
  // if you console.log(movies); you will see all the movies

  
  return (
    <div className="row">
      <h2>{title}</h2>

    <div className="row__posters">
      {movies.map((movie) => (
// get rid of dead links,
// if its a large movie and the poster path exist or if its not a large row and the backdrop exist, then render it. This is how we add a conditional to prevent any form of dead links coming in.
((isLargeRow && movie.poster_path) || 
(!isLargeRow && movie.backdrop_path)) && ( 
<img 
// ref={ref}
// onclick={()=> handleClick(movie)}
  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
  key={movie.id}
  src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
  alt={movie.name} 
  />)
      ))} 
      {/* movies.map. for every single movie, SO we are going to iterate through the movies, I want to return an image. the image is going to be for the different films  */}
      {/* image setion: if it is "isLargeRow", then I'm going to use the movie.poster path, the reason is because there are two different images that come back in the request. Were going to use the Poster Path if it is a Big Row. and if it is a small one, were going to use    */}
      </div>
    </div>
  );
}

export default Row;
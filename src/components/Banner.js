import React, { useEffect, useState } from 'react';

import './Banner.css';
import axios from '../axios';
import requests from '../Requests'

function Banner() {

	const [movie, setMovie] = useState([]);
	useEffect(()=> {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					// get a random number of data 
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	// create a function to truncate the text when it gets too long, and put the display "..." to show that there is more.
	// It will take a string, and it will take a 'n', the number of characters before you want to cut them off.
	// Return string "?" means the thing might not be present,
	// string?length is greater than the number "n", which is the number you pass in
	// then I want to do this special function called the substring,"string.substr(0, n - 1) + '...'" basically what it will do is, cut the string after it reaches that character count and it will just add "..."
	// otherwise if it is not greater than 150/n then what it will do is just return the string.
	// now call the truncate function with the string between back ticks "``".
	// then add 150 is my character limit
	// after 150 characters, the text will truncate


	function truncate(string, n) {
		return (string?.length > n ? string.substr(0, n - 1) + '...' : string);
	}


	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat'
			}}
		>
			{/* // the baclgroundImage gets a new image everytime you refresh */}
			<div className="banner__contents">
				<h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
			</div>

			{/* this is the nice fade effect  */}
			<div className="banner--fadeButton" />
		</header>
	);
}
export default Banner;

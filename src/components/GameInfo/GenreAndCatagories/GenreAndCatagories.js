import React from "react";

import "./GenreAndCatagories.css";

const genreAndCatagories = (props) => {
	
	let categories = props.categories.map(categorie => {
		return(
			<li key = {categorie.id}>{categorie.description}&nbsp;</li>
		);
	});

	const genres = props.genres.map(genre => {
		return(
			<li key = {genre.id}>{genre.description}&nbsp;</li>
		);
	});
	
	return(
		<div className = "GenreAndCatagories">
			<h5>Categories: </h5>
			<ul className = "Catagories">
				{categories}
			</ul>
			<h5>Genres: </h5>
			<ul className = "Genres">
				{genres}
			</ul>
		</div>
	);
}

export default genreAndCatagories;
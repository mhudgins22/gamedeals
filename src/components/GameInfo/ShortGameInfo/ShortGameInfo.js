import React from "react";

import "./ShortGameInfo.css";

const shortGameInfo = (props) => {

	let genres = props.genres.map(genre => {
		return(
			<li key = {genre.id}>
				{genre.description}
			</li>
		);
	});
	

	return(
		<div className = "Short">
			<div className = "DevInfo">
				<h2>{props.name}</h2>
				<h3>{props.developers}</h3>
			</div>
			<div className = "Description">
				<p>{props.shortDescription}</p>
			</div>
			<div>
				<h3>Genres:</h3>
				<ul>
					{genres}
				</ul>
			</div>
			<h4>Metacritic: {props.metacritic ? props.metacritic.score : <h4>Not Yet Scored</h4>}</h4>
		</div>
	);
}

export default shortGameInfo;
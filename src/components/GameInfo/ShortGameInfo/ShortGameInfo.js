import React from "react";

import "./ShortGameInfo.css";

const shortGameInfo = (props) => {

	let genres = props.genres.map(genre => {
		return(
			<li key = {genre.id}>
				{genre.description}&nbsp;
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
				<ul>
					{genres}
				</ul>
			</div>
		</div>
	);
}

export default shortGameInfo;
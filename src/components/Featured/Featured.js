import React from "react";

import "./Featured.css";


const featured = (props) => {
	
	const featuredItems = props.features.map((feature, i) => {
		return(
			<div key = {i}>
				<img className = "Banner" src = {feature} alt = ""/>
			</div>
		);
	});

	const name = props.name
	

	return(
		<div className = "Featured">
			<div>
				<h2>{name}</h2>
			</div>
			<div>
				{featuredItems[props.shown]}
			</div>
		</div>
	);
}

export default featured;
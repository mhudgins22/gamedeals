import React from "react";

import "./FullGameInfo.css";

const fullGameInfo = (props) => {
	
	const description = () => {
		return {__html: props.fullDescription};
	}
	
	return(
		<div className = "Full">
			<div>
				<h3>{props.name}</h3>
				<p dangerouslySetInnerHTML = {description()}></p>
			</div>
		</div>
	);
}

export default fullGameInfo;
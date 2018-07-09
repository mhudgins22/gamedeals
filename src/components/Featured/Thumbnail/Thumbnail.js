import React from "react";

import "./Thumbnail.css";

const thumbnail = (props) => {
	return (
		<div className = "Thumbnail">
			<img src = {props.source} alt = ""/>
		</div>
	);
}

export default thumbnail;
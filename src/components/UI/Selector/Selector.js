import React from "react";

import "./Selector.css";

const selector = (props) => {
	return(
		<div className = "Selector" onClick = {(i) => props.clicked(props.number)}>
		</div>
	);
}

export default selector;
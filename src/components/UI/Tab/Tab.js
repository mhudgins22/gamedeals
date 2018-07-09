import React from "react";

const tab = (props) => {
	return(
		<button onClick = {props.clicked}>{props.catagory}</button>
	);
}

export default tab;
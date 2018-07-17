import React from "react";
import {Link} from "react-router-dom";

import "./Navitem.css";

const navItem = (props) => {
	
	return(
		<Link className = "Navitem" to = {props.link}>{props.name}</Link>
	)
}

export default navItem;
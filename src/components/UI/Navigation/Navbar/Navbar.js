import React from "react";
import NavItems from "../Navitems/Navitems";

import "./Navbar.css";

const navbar = (props) => {
	return(
		<div className = "Navbar">
			<NavItems className = "Navbar"/>
		</div>
	);
}

export default navbar;
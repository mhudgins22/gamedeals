import React from "react";
import NavItem from "./Navitem/Navitem";

import "./Navitems";

const navItems = (props) => {
	
	return(
		<div className = "Navitems">
			<NavItem link = "/" name = "Browse" />
			<NavItem link = "/" name = "Wish List" />
			<NavItem link = "/" name = "Log In" />
		</div>
	)
}

export default navItems;
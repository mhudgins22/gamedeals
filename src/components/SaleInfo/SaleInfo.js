import React from "react";

import ListItem from "../GamesList/ListItem/ListItem";

import "./SaleInfo.css";

const saleInfo = (props) => {
	return(
		<div className = "SaleInfo">
			<table>
				<tbody>
					<ListItem 
						name = {props.name}
						price = {props.price}
						final = {props.final}
						discounted = {props.discounted}/>
				</tbody>
			</table>
		</div>
	);
}

export default saleInfo;
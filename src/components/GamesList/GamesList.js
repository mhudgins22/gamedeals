import React from "react";


import ListItem from "./ListItem/ListItem";

import "./GameList.css";

const gameList = (props) => {

	let list = [];

	list = props.games.map((game, i) => {
		return(
				<ListItem 
					key = {i} 
					cover = {game.small_capsule_image} 
					name = {game.name}
					getId = {game.getId}
					id = {game.id}
					price = {game.original_price / 100} 
					discounted = {game.discounted} 
					final = {(game.final_price / 100).toFixed(2)}/>
		)
	})
	
	return(
		<div className = "GameList">
			<table>
				<tbody>
					{list}
				</tbody>
			</table>
		</div>
	);
}

export default gameList;
import React from "react";


import ListItem from "./ListItem/ListItem";


import "./GameList.css";

const gameList = (props) => {

	let list = [];

	list = props.games.map((game, i) => {
		if (game.type === 0) {
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
		} else if (game.type === "dlc") {
			return(
				<ListItem
					key = {i}
					name = {game.name}
					getId = {game.getId}
					id = {game.steam_appid}
					price = {game.price_overview ? game.price_overview.initial / 100 : null}
					discounted = {game.price_overview ? game.price_overview.discount_percent === 0 ? false : true : null}
					final = {game.price_overview ? (game.price_overview.final / 100).toFixed(2) : "0.00"}/>
			);
		} else {
			return null;
		}
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
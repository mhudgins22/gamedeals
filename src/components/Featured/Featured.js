import React from "react";

import "./Featured.css";

import Selector from "../UI/Selector/Selector";

const featured = (props) => {

	let featuredGames = null;

	if (props.games.length > 1) {
		featuredGames = props.games.map((game, i) => {
			return(
				<div key = {i}>
					<img className = "Banner" src = {game.header_image} alt = {game.name}/>
				</div>
			);
		})
	} else {
		featuredGames = props.games.screenshots.slice(0,6).map((screenshot, i) => {
			return(
				<div key = {i}>
					<img className = "Banner" src = {screenshot.path_thumbnail} alt = ""/>
				</div>
			);
		})
	}

	let selectors = null;

	if (props.games.length > 1) {
		selectors = props.games.map((game, i) => {
			return(
				<Selector key = {game.id} number = {i} clicked = {() => props.clicked(i)} />
			);
		})
	} else {
		selectors = props.games.screenshots.slice(0,6).map((screenshot, i) => {
			return(
				<Selector key = {screenshot.id} number = {i} clicked = {() => props.clicked(i)} />
			);
		})
	}
	
	let name = null;

	if (props.games.length > 1) {
		name = props.games[props.shown].name;
	} else {
		name = props.games.name;
	}
	
	
	return(
		<div className = "Featured">
			<div>
				<h2>{name}</h2>
			</div>
			<div>
				{featuredGames[props.shown]}
				{selectors}
			</div>
		</div>
	);
}

export default featured;
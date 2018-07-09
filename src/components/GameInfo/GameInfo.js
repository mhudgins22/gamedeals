import React from "react";

import ShortGameInfo from "./ShortGameInfo/ShortGameInfo";

const gameInfo = (props) => {
	return(
		<ShortGameInfo 
			name = {props.game.name}
			shortDescription = {props.game.short_description}
			developers = {props.game.developers}
			genres = {props.game.genres}/>
	);
}

export default gameInfo;
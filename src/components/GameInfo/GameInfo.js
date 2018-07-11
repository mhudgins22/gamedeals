import React from "react";

import ShortGameInfo from "./ShortGameInfo/ShortGameInfo";
import FullGameInfo from "./FullGameInfo/FullGameInfo";
import GenreAndCatagories from "./GenreAndCatagories/GenreAndCatagories";
import Requirements from "./Requirements/Requirements"

const gameInfo = (props) => {
	return(
		<div>
			<ShortGameInfo 
				name = {props.game.name}
				shortDescription = {props.game.short_description}
				developers = {props.game.developers}
				genres = {props.game.genres ? props.game.genres : []}
				metacritic = {props.game.metacritic}/>
			<FullGameInfo 
				name = {props.game.name}
				fullDescription = {props.game.detailed_description}/>
			<GenreAndCatagories 
				categories = {props.game.categories ? props.game.categories : []}
				genres = {props.game.genres ? props.game.genres : []}/>
			<Requirements 
				pcRequirements = {props.game.pc_requirements.length !== 0 ? props.game.pc_requirements : null}
				macRequirements = {props.game.mac_requirements.length !== 0 ? props.game.mac_requirements : null}
				linuxRequirements= {props.game.linux_requirements.length !== 0 ? props.game.linux_requirements : null}
				toPCRec = {props.toPCRec}
				toMacRec = {props.toMacRec}
				toLinuxRec = {props.toLinuxRec}
				showPC = {props.showPC}
				showMac = {props.showMac}
				showLinux = {props.showLinux}/>
		</div>
	);
}

export default gameInfo;
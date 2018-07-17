import * as actionTypes from "./actionTypes";
import axios from "../../axios";

//actions to fetch all info about a game based on its ID
export const fetchGameByIdSuccess = (game) => {
	return{
		type: actionTypes.FETCH_GAME_BY_ID,
		game: game
	}
}



export const fetchGameById = (gameId) => {
	return dispatch => {
		axios.get("api/appdetails/?appids=" + gameId)
		.then(response => {
			dispatch(fetchGameByIdSuccess(response.data[gameId].data))
		})
		.catch(err => {
			console.log(err);
		});
	}
}

//Retrieves DLC info for game if there is any
export const fetchGameDLCSuccess = (dlcList) => {
	return{
		type: actionTypes.FETCH_GAME_DLC,
		dlcList: dlcList
	}
}

export const fetchGameDLC = (dlcIds) => {
	return dispatch => {
		let dlcList = [];
		for (let i = 0; i < dlcIds.length; ++i) {
			axios.get("api/appdetails/?appids=" + dlcIds[i])
			.then(response => {
				dlcList.push(response.data[dlcIds[i]].data);
			})
			.catch(err => {
				console.log(err);
			})
		}
		dispatch(fetchGameDLCSuccess(dlcList));
	}
}

//Fetch base version of game if it is DLC
export const fetchBaseGameSuccess = (baseGame) => {
	return {
		type: actionTypes.FETCH_BASE_GAME,
		baseGame: baseGame
	}
}

export const fetchBaseGame = (gameId) => {
	return dispatch => {
		axios.get("api/appdeatails/?appids=" + gameId)
		.then(response => {
			dispatch(fetchBaseGameSuccess(response.data[gameId].data));
		})
		.catch(err => {
			console.log(err);
		});
	}
}


//actions to change requirements view
export const showPCRequirements = () => {
	return{
		type: actionTypes.SHOW_PC_REQUIREMENTS
	}
}

export const showMacRequirements = () => {
	return{
		type: actionTypes.SHOW_MAC_REQUIREMENTS
	}
}

export const showLinuxRequirements = () => {
	return{
		type: actionTypes.SHOW_LINUX_REQUIREMENTS
	}
}
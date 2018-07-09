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
			dispatch(fetchGameByIdSuccess(response.data[gameId].data));
		})
		.catch(err => {
			console.log(err);
		})
	}
}
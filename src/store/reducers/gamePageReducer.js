import * as actionTypes from "../actions/actionTypes";


const initialState = {
	game: null
}


//Functions to fetch game info based on ID
const fetchGameByIdSuccess = (state, action) => {
	return({
		...state,
		game: action.game
	})
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_GAME_BY_ID: return fetchGameByIdSuccess(state, action);
		default: return state;
	}
}

export default reducer;
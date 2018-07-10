import * as actionTypes from "../actions/actionTypes";


const initialState = {
	game: null,
	showPC: true,
	showMac: false,
	showLinux: false
}


//Functions to fetch game info based on ID
const fetchGameByIdSuccess = (state, action) => {
	return({
		...state,
		game: action.game
	})
}

const showPCRequirements = (state, action) => {
	return({
		...state,
		showPC: true,
		showMac: false,
		showLinux: false
	});
}

const showMacRequirements = (state, action) => {
	return({
		...state,
		showPC: false,
		showMac: true,
		showLinux: false
	});
}

const showLinuxRequirements = (state, action) => {
	return({
		...state,
		showPC: false,
		showMac: false,
		showLinux: true
	});
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_GAME_BY_ID: return fetchGameByIdSuccess(state, action);
		case actionTypes.SHOW_PC_REQUIREMENTS: return showPCRequirements(state, action);
		case actionTypes.SHOW_MAC_REQUIREMENTS: return showMacRequirements(state, action);
		case actionTypes.SHOW_LINUX_REQUIREMENTS: return showLinuxRequirements(state, action);
		default: return state;
	}
}

export default reducer;
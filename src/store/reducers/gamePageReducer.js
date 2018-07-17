import * as actionTypes from "../actions/actionTypes";


const initialState = {
	game: null,
	dlcList: null,
	baseGame: null,
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

const fetchGameDLCSuccess = (state, action) => {
	return({
		...state,
		dlcList: action.dlcList
	})
}

const fetchBaseGameSuccess = (state, action) => {
	return({
		...state,
		baseGame: action.baseGame
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
		case actionTypes.FETCH_GAME_DLC: return fetchGameDLCSuccess(state, action);
		case actionTypes.FETCH_BASE_GAME: return fetchBaseGameSuccess(state, action);
		default: return state;
	}
}

export default reducer;
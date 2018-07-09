import * as actionTypes from "../actions/actionTypes";

const initialState = {
	featuredGames: null,
	topSellers: null,
	newReleases: null,
	specials: null,
	comingSoon: null

};

const fetchCatagoriesSuccess = (state, action) => {
	return ({
		...state,
		topSellers: action.games.top_sellers.items,
		newReleases: action.games.new_releases.items,
		specials: action.games.specials.items,
		comingSoon: action.games.coming_soon.items
	});
}

const fetchFeaturedSuccess = (state, action) => {
	return ({
		...state,
		featuredGames: action.games
	})
}


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_CATAGORIES: return fetchCatagoriesSuccess(state, action);
		case actionTypes.FETCH_FEATURED: return fetchFeaturedSuccess(state, action);
		default: return state;
	}
}

export default reducer;


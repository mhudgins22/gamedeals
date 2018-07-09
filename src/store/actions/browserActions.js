import * as actionTypes from "./actionTypes";
import axios from "../../axios";


//Actions for fetching popular new games, needs start, success and failure cases
export const fetchCatagoriesSuccess = (games) => {
	return {
		type: actionTypes.FETCH_CATAGORIES,
		games: games
	};
}

 export const fetchCatagories = () => {
 	 return dispatch => {
	 	 axios.get("/api/featuredcategories")
		.then(response => {
			dispatch(fetchCatagoriesSuccess(response.data));
		})
		.catch(err => {
			console.log(err);
		});
	 }
 }

 //actions for fetching featured games for main banner needs, start, success and  failure cases
export const fetchFeaturedSuccess = (games) => {
	return {
		type: actionTypes.FETCH_FEATURED,
		games: games
	}
}

export const fetchFeatured = () => {
	return dispatch => {
		axios.get("api/featured")
		.then(response => {
			dispatch(fetchFeaturedSuccess(response.data.featured_win));
		})
		.catch(err => {
			console.log(err);
		});
	}
}

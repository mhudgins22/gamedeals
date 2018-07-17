import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "../../axios";

import Featured from "../../components/Featured/Featured";
import GamesList from "../../components/GamesList/GamesList";
import Tab from "../../components/UI/Tab/Tab";
import Spinner from "../../components/UI/Spinner/Spinner";
import Selector from "../../components/UI/Selector/Selector";


import * as actions from "../../store/actions/index";

let interval = null;

class Browse extends Component {

	state = {
		showFeatured: 0,
		catagory: "Top Sellers"
	}

	componentDidMount() {
		this.props.onFetchCatagories();
		this.props.onFetchFeatured();
		this.autoChangeFeatured();
	}

	componentWillUnmount() {
		clearInterval(interval);
	}

	autoChangeFeatured() {
		interval = setInterval(() => {
			if (this.state.showFeatured === this.props.featuredGames.length - 1) {
				this.setState({showFeatured: 0});
			} else {
				this.setState({showFeatured: this.state.showFeatured + 1});
			}
		}, 10000)
	}

	onSelectFeatured(i) {
		this.setState({showFeatured: i});
	}

	render() {

		//Renders billboard of featured games
		let featured = <Spinner />;
		let selectors = [];

		if (this.props.featuredGames) {
			let headers = [];
			for (let i = 0; i < this.props.featuredGames.length; ++i) {
				headers.push(this.props.featuredGames[i].header_image)
			}
			featured = (
				<div>
					<h2>{this.props.featuredGames[this.state.showFeatured].name}</h2>
					<Featured 
					features = {headers}
					shown = {this.state.showFeatured} 
					clicked = {(i) => this.onSelectFeatured(i)}/>
				</div>
			);

			selectors = this.props.featuredGames.map((screenshot, i) => {
				return(
					<Selector key = {i} number = {i} clicked = {() => this.onSelectFeatured(i)} />
				);
			})

		}

		//Holds lists of games in each category
		let category = null;

		if (this.state.catagory === "Top Sellers" && this.props.topSellers) {
			category = (
				<GamesList games = {this.props.topSellers} />
			);
		} else if (this.state.catagory === "New Releases" && this.props.newReleases) {
			category = (
				<GamesList games = {this.props.newReleases} />
			);
		} else if (this.state.catagory === "Specials" && this.props.specials) {
			category = (
				<GamesList games = {this.props.specials} />
			);
		}

		return(
			<div>
				<h1 
					style ={{
						paddingTop: "75px"
					}}>Browse Games</h1>
				<div>
					{featured}
					{selectors}
				</div>
				<div>
					<Tab clicked = {() => this.setState({catagory: "Top Sellers"})} catagory = "Top Sellers" />
					<Tab clicked = {() => this.setState({catagory: "New Releases"})} catagory = "New Releases" />
					<Tab clicked = {() => this.setState({catagory: "Specials"})} catagory = "Specials" />
				</div>
				<div>
					{category}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return{
		featuredGames: state.browse.featuredGames,
		topSellers: state.browse.topSellers,
		newReleases: state.browse.newReleases,
		specials: state.browse.specials,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchCatagories: () => dispatch(actions.fetchCatagories()),
		onFetchFeatured: () => dispatch(actions.fetchFeatured()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
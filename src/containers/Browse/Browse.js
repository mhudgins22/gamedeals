import React, {Component} from "react";
import {connect} from "react-redux";

import Featured from "../../components/Featured/Featured";
import GamesList from "../../components/GamesList/GamesList";
import Tab from "../../components/UI/Tab/Tab";

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
			if (this.state.showFeatured === this.props.featuredGames.length -1) {
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
		return(
			<div>
				<h1>Browse Games</h1>
				{this.props.featuredGames ? <Featured games = {this.props.featuredGames} shown = {this.state.showFeatured} clicked = {(i) => this.onSelectFeatured(i)}/> : <p>Loading...</p>}
				<div>
					<Tab clicked = {() => this.setState({catagory: "Top Sellers"})} catagory = "Top Sellers" />
					<Tab clicked = {() => this.setState({catagory: "New Releases"})} catagory = "New Releases" />
					<Tab clicked = {() => this.setState({catagory: "Specials"})} catagory = "Specials" />
				</div>
				<div>
					{this.state.catagory === "Top Sellers" && this.props.topSellers ? <GamesList games = {this.props.topSellers} /> : null}
					{this.state.catagory === "New Releases" && this.props.newReleases ? <GamesList games = {this.props.newReleases} /> : null}
					{this.state.catagory === "Specials" && this.props.specials ? <GamesList games = {this.props.specials} /> : null}
				</div>
				<button onClick = {() => {
					console.log(this.props.topSellers);
					console.log(this.props.newReleases);
				}}/>
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
import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "../../store/actions/index";

import Featured from "../../components/Featured/Featured";
import GameInfo from "../../components/GameInfo/GameInfo";

let interval = null;

class GamePage extends Component{

	state = {
		showFeatured: 0
	}

	
	componentDidMount() {
		const gameId = parseInt(this.props.location.pathname.slice(4), 10);
		this.props.onFetchGameById(gameId);
		this.autoChangeFeatured();
	}

	componentWillUnmount() {
		clearInterval(interval);
	}

	autoChangeFeatured() {
		interval = setInterval(() => {
			if (this.state.showFeatured === this.props.game.screenshots.length - 1 || this.state.showFeatured === 5) {
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
				{this.props.game ? <img src = {this.props.game.header_image} alt = {this.props.game.name}/> : null}
				<br />
				{this.props.game ? 
					<Featured 
						games = {this.props.game} 
						shown = {this.state.showFeatured} 
						clicked = {(i) => this.onSelectFeatured(i)}/> 
					: 
						<p>Loading...</p>
				}
				{this.props.game ? <GameInfo game = {this.props.game}/> : null}
				<br />
				<button 
					onClick = {() => {
						console.log(this.props.game);
					}}>test
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return{
		game: state.gamePage.game
	}
}

const mapDispatchToProps = dispatch => {
	return{
		onFetchGameById: (gameId) => dispatch(actions.fetchGameById(gameId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
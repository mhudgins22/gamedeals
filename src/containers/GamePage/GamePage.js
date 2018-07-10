import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "../../store/actions/index";

import Featured from "../../components/Featured/Featured";
import GameInfo from "../../components/GameInfo/GameInfo";
import SaleInfo from "../../components/SaleInfo/SaleInfo";

let interval = null;

class GamePage extends Component{

	state = {
		showFeatured: 0,
	}

	
	//set up auto showing of featured images
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
				{this.props.game ? <GameInfo 
					game = {this.props.game} 
					toPCRec = {this.props.showPCRequirements} 
					toMacRec = {this.props.showMacRequirements} 
					toLinuxRec = {this.props.showLinuxRequirements}
					showPC = {this.props.showPC}
					showMac = {this.props.showMac}
					showLinux = {this.props.showLinux}/> : null}
				{this.props.game ? <SaleInfo 
					name = {this.props.game.name}
					id = {this.props.game.id}
					price = {this.props.game.price_overview.initial / 100}
					final = {(this.props.game.price_overview.final / 100).toFixed(2)}
					discounted = {this.props.game.price_overview.discount_percent === 0 ? false : true}/> : null}
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
		game: state.gamePage.game,
		showPC: state.gamePage.showPC,
		showMac: state.gamePage.showMac,
		showLinux: state.gamePage.showLinux
	}
}

const mapDispatchToProps = dispatch => {
	return{
		onFetchGameById: (gameId) => dispatch(actions.fetchGameById(gameId)),
		showPCRequirements: () => dispatch(actions.showPCRequirements()),
		showMacRequirements: () => dispatch(actions.showMacRequirements()),
		showLinuxRequirements: () => dispatch(actions.showLinuxRequirements())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
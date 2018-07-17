import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "../../store/actions/index";

import Featured from "../../components/Featured/Featured";
import GameInfo from "../../components/GameInfo/GameInfo";
import SaleInfo from "../../components/SaleInfo/SaleInfo";
import GamesList from "../../components/GamesList/GamesList";
import Spinner from "../../components/UI/Spinner/Spinner";
import Selector from "../../components/UI/Selector/Selector";


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


	
	componentDidUpdate() {
		//Grab dlc relavent to game
		if (this.props.game.type === "game" && !this.props.dlcList && this.props.game.dlc) {
			this.props.onFetchGameDLC(this.props.game.dlc);
		}
		//Gets base game for DLC but throws 403 error
		/*if (this.props.game.type === "dlc" && !this.props.baseGame) {
			this.props.onFetchBaseGame(parseInt(this.props.game.fullgame.appid), 10);
		}*/
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

		let featured = <Spinner />;
		let gameinfo = null;
		let saleinfo = null;
		let dlcList = null;
		let discounted = false;
		let selectors = [];
		let screenshots = [];

		if (this.props.game) {
			if (this.props.game.screenshots) {
				for (let i = 0; i < this.props.game.screenshots.length; ++i) {
					screenshots.push(this.props.game.screenshots[i].path_full);
				}
			}
			featured = (
				<div>
					<img 
						style ={{
							marginTop: "100px"
						}}
						src = {this.props.game.header_image} 
						alt = {this.props.game.name}/>
					<br />
					<Featured 
						features = {screenshots} 
						name = {this.props.game.name}
						shown = {this.state.showFeatured} 
						clicked = {(i) => this.onSelectFeatured(i)}/>
				</div>
			);

			selectors = screenshots.map((screenshot, i) => {
				return(
					<Selector key = {i} number = {i} clicked = {() => this.onSelectFeatured(i)} />
				);
			})

			gameinfo = (
				<GameInfo 
					game = {this.props.game} 
					toPCRec = {this.props.showPCRequirements} 
					toMacRec = {this.props.showMacRequirements} 
					toLinuxRec = {this.props.showLinuxRequirements}
					showPC = {this.props.showPC}
					showMac = {this.props.showMac}
					showLinux = {this.props.showLinux}/>
			);

			saleinfo = (
				<SaleInfo 
					name = {this.props.game.name}
					id = {this.props.game.id}
					final = {"0.00"}/>
			);
			if (this.props.game.price_overview) {
				if (this.props.game.price_overview.discount_percent > 0) {
					discounted = true;
				}

				saleinfo = (
					<SaleInfo 
						name = {this.props.game.name}
						id = {this.props.game.id}
						price = {this.props.game.price_overview.initial / 100}
						final = {(this.props.game.price_overview.final / 100).toFixed(2)}
						discounted = {discounted}/>
				);
			}

			if (this.props.dlcList) {
				dlcList = (
					<div>
						<h3>Available DLC </h3>
						<GamesList games = {this.props.dlcList}/>
					</div>
				)
			}
		}

		


		return(
			<div>
				<div>
					{featured}
					{selectors}
				</div>
				{gameinfo}
				{saleinfo}
				{dlcList}
				<button 
					onClick = {() => {
						console.log(this.props.game);
						console.log(this.props.dlcList);
					}}>test
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return{
		game: state.gamePage.game,
		dlcList: state.gamePage.dlcList,
		baseGame: state.gamePage.baseGame,
		showPC: state.gamePage.showPC,
		showMac: state.gamePage.showMac,
		showLinux: state.gamePage.showLinux
	}
}

const mapDispatchToProps = dispatch => {
	return{
		onFetchGameById: (gameId) => dispatch(actions.fetchGameById(gameId)),
		onFetchGameDLC: (dlcIds) => dispatch(actions.fetchGameDLC(dlcIds)),
		onFetchBaseGame: (gameId) => dispatch(actions.fetchBaseGame(gameId)),
		showPCRequirements: () => dispatch(actions.showPCRequirements()),
		showMacRequirements: () => dispatch(actions.showMacRequirements()),
		showLinuxRequirements: () => dispatch(actions.showLinuxRequirements())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
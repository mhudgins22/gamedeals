import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import * as actions from "../../../store/actions/index";

import "./ListItem.css";

const listItem = (props) => {

	return(
		<tr className = "ListItem">
			<td><img src = {props.cover} alt = ""/></td>
			<td><h4>{props.vendor}</h4></td>
			<td>
				{props.id ? <Link 
					to = {"/id=" + props.id} 
					style = {{textDecoration: "none", color: "black"}}
					onClick = {(gameId) => this.props.onFetchGameId(props.id)}>
						<h4>{props.name}</h4>
				</Link> : <h4>{props.name}</h4>}
			</td>
			{props.discounted === true ? 
				<td>
					<h5 style = {{color: "green"}}>
						<span style = {{color: "red", display: "inline", textDecoration: "line-through"}}>{props.price}</span> ${props.final} ({100 - ((props.final / props.price) * 100).toFixed(0)}%)</h5>
				</td> :
				<td>
					{props.final !== "0.00" ? <h5 style = {{color: "green"}}>${props.final}</h5> : <h5 style = {{color: "green"}}>Free To Play</h5>}
				</td>
			}
		</tr>
	);
}

const mapStateToProps = state => {
	return{
		gameId: state.gamePage.gameId
	}
}

const mapDispatchToProps = dispatch => {
	return{
		onFetchGameId: (gameId) => dispatch(actions.fetchGameId(gameId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(listItem);
import React, { Component } from 'react';
import {Route} from "react-router-dom";

import './App.css';

import Browse from "./containers/Browse/Browse";
import GamePage from "./containers/GamePage/GamePage";


class App extends Component {

	render() {
		return (
			<div className="App">
				<Route path = "/" exact component = {Browse} />
				<Route path = "/:gameid" component = {GamePage}/>
			</div>
		);
	}
}

export default App;

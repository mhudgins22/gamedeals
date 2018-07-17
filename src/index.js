import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import BrowserReducer from "./store/reducers/browserReducer";
import GamePageReducer from "./store/reducers/gamePageReducer";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
	browse: BrowserReducer,
	gamePage: GamePageReducer
});

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));

const app = (
	<Provider store = {store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

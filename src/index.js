import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path='/' component={App}></Route>
		</Switch>
	</Router>,
	document.querySelector('.root')
);

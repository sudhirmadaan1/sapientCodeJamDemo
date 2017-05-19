import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store from './store';

const router = (
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));


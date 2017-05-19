import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/index';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(
	rootReducer, 
	applyMiddleware(...middleware));

if(module.hot) {
 	module.hot.accept('./reducer', () => {
 		const nextRootReducer = require('./reducer/index').default;
 		store.replaceReducer(nextRootReducer);
 	});
 }

 export default store;
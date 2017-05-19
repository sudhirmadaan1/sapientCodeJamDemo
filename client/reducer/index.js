import { combineReducers } from 'redux';
import {REQUEST_POSTS, RECEIVE_POSTS} from '../action/actionCreator';

const renderedState = (state = 'upcomingMovie', action) => {
	switch(action.type) {
		case RECEIVE_POSTS:
			return action.renderedState
		default:
			return state
	}
}

const posts = (state = {
	isFetching: false,
	didInvalidate: false,
 	items: []
}, action) => {
	switch(action.type){
	case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
	}
}

const getData = (state={ }, action) =>  {
	switch (action.type) {
		case REQUEST_POSTS:
		case RECEIVE_POSTS:
		return {
			...state,
			[action.renderedState] : posts(state[action.renderedState], action)
		}
		default:
		return state
	}
}

const rootReducer = combineReducers({renderedState, getData});

export default rootReducer;
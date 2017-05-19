import { connect } from 'react-redux';
import * as actionCreators from '../action/actionCreator'
import Main from './Main';

const mapStateToProps = (state) => {
	const { renderedState, getData } = state
	  const {
	    isFetching,
	    lastUpdated,
	    items: posts
	  } = getData[renderedState] || {
	    isFetching: true,
	    items: []
	  }

	  return {
	    renderedState,
	    posts,
	    isFetching,
	    lastUpdated
	  }
}

const App = connect(mapStateToProps)(Main);

export default App;
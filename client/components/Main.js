import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchData } from '../action/actionCreator'


class Main extends Component {
	componentDidMount() {
		const { dispatch, renderedState } = this.props;
		dispatch(fetchData(renderedState));
	}
	render() {
		return(
		<div>
			<h1>
				<Link to="/">Sapient Code Jam</Link>
			</h1>
			{React.cloneElement(this.props.children, this.props)}
		</div>)
	}
};

export default Main;
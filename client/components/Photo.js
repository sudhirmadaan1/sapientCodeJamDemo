import React, { Component } from 'react';
import { Link } from 'react-router';

class Photo extends Component {
	render() {
		const { post, i } = this.props;
		return(
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<img src={post.PosterPath} alt={post.Region} />
				</div>	
				<figcaption>
					<p>{post.Genre}</p>
					<p>{post.Description}</p>
				</figcaption>
			</figure>
		)
	}
};

export default Photo;
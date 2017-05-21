import React, { Component } from 'react';
import { Link } from 'react-router';

class Photo extends Component {
	render() {
		const { post, i } = this.props;
		return(
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<img src={post.owner.avatar_url} alt={post.name} />
				</div>	
				<figcaption>
					<p>Name: {post.name}</p>
					<p>Description: {post.description}</p>
					<p>Language: {post.language}</p>
					<p>Fork Count: {post.forks_count}</p>
					<p>Watchers: {post.watchers}</p>
				</figcaption>
			</figure>
		)
	}
};

export default Photo;
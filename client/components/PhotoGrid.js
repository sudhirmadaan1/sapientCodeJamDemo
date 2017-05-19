import React, {Component} from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
	render() {
		const isLoading = this.props.posts.length === 0;
		return(<div>
				{isLoading
          		? (<h2>Loading...</h2>)
				: <div className="photo-grid">
					{this.props.posts.map((post,i) => 
						<Photo {...this.props} key={i} post={post} />
					)}
				</div>
				}
			</div>
		)
	}
}

export default PhotoGrid;
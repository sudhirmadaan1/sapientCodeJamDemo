export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = (renderedState, json) => ({
	type:RECEIVE_POSTS,
	renderedState,
	posts: json,
	receivedAt: Date.now()
})

export const fetchData = renderedState => dispatch => {
	return fetch(`http://api.cinemalytics.in/v2/movie/upcoming?auth_token=9332810780D6735F17CB9DE8C26DB64A`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(renderedState, json)))
}
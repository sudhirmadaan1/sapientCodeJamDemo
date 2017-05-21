export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = (renderedState, json) => ({
	type:RECEIVE_POSTS,
	renderedState,
	posts: json.items,
	receivedAt: Date.now()
})

export const fetchData = renderedState => dispatch => {
	return fetch(`https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100&since=monthly`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(renderedState, json)))
}
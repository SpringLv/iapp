export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_NODE = 'SELECT_NODE';
export const INVALIDATE_NODE = 'INVALIDATE_NODE';

export const selectNode = node => ({
    type: SELECT_NODE,
    node
});

export const invalidateNode = node => ({
    type: INVALIDATE_NODE,
    node
});

export const requestPosts = node => ({
    type: REQUEST_POSTS,
    node
});

export const receivePosts = (node, json) => ({
    type: RECEIVE_POSTS,
    node,
    posts: json.data,
    receivedAt: Date.now()
});

const fetchPosts = node => dispatch => {
    dispatch(requestPosts(node));
    return fetch(`/treeList`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(node, json)))
};

const shouldFetchPosts = (state, node) => {
    const posts = state.postsByNode[node];
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
};

export const fetchPostsIfNeeded = node => (dispatch, getState) => {
    if (shouldFetchPosts(getState(), node)) {
        return dispatch(fetchPosts(node))
    }
};

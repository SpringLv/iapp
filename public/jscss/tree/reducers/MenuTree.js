import { combineReducers } from 'redux'
import {
    SELECT_NODE, INVALIDATE_NODE,
    REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/MenuTree'

const selectedNode = (state = 'ReactJS', action = null) => {
    switch (action.type) {
        case SELECT_NODE:
            return action.node;
        default:
            return state
    }
};

const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action = null) => {
    switch (action.type) {
        case INVALIDATE_NODE:
            return {
                ...state,
                didInvalidate: true
            };
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

const postsByNode = (state = {}, action = null) => {
    switch (action.type) {
        case INVALIDATE_NODE:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.node]: posts(state[action.node], action)
            };
        default:
            return state
    }
};

const rootReducer = combineReducers({
    postsByNode,
    selectedNode
});

export default rootReducer

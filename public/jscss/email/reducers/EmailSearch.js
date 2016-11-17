import { DO_SEARCH, SEARCH_RESULT, Ajax } from "../actions/EmailSearch"
import { combineReducers } from "redux"


const GetEmailList = (state = {}, action = {}) => {
    switch (action.type) {
        case DO_SEARCH:
            return state;
        case SEARCH_RESULT:
            return Object.assign({},state,{
                items:action.items
            });
        default:
            return state
    }
};
export default GetEmailList;
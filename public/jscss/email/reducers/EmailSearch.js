import { DO_SEARCH, SEARCH_RESULT, ADD_ITEM, DEL_ITEM, Ajax } from "../actions/EmailSearch"
import { combineReducers } from "redux"

const recipientsItems = (state = {}, action = {})=> {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.item];
        case DEL_ITEM:
            let list =[...state];
            list.splice(action.index,1);
            return list;
        default:
            return state;
    }
};
const GetList = (state = {}, action = {}) => {
    switch (action.type) {
        case DO_SEARCH:
            return state;
        case SEARCH_RESULT:
            return {
                ...state,
                searchList: action.searchList || []
            };
        case ADD_ITEM:
            return {
                ...state,
                recipientsItems: recipientsItems(state.recipientsItems, action)
            };
        case DEL_ITEM:
            return {
                ...state,
                recipientsItems: recipientsItems(state.recipientsItems, action)
            };
        default:
            return state;
    }
};
export default GetList;
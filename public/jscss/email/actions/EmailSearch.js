export const ADD_ITEM = "ADD_ITEM";
export const DEL_ITEM = "DEL_ITEM";
export const DO_SEARCH = "DO_SEARCH";
export const SEARCH_RESULT = "RESULT";

export const addItem = item => {
    return {
        type : ADD_ITEM,
        item
    }
};

export const delItem = item => {
    return {
        type : DEL_ITEM,
        item
    }
};
export const doSearch = name => {
    return {
        type : DO_SEARCH,
        name
    }
};


export const Ajax = name => dispatch => {
    dispatch(doSearch(name));
    return fetch(`/emailList?name=${name}`)
        .then(response => response.json())
        .then(json => dispatch(result(json)))
};

export const result = json => ({
    type: SEARCH_RESULT,
    items: json.data
});
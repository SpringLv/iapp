export const SEARCH_CHAPTER = "SEARCH_CHAPTER";
export const SEARCH_CHAPTER_RESULT = "SEARCH_CHAPTER_RESULT";
export const SEARCH_SECTION = "SEARCH_SECTION";
export const SEARCH_SECTION_RESULT = "SEARCH_SECTION_RESULT";
export const SEARCH_TEXT = "SEARCH_TEXT";
export const SEARCH_TEXT_RESULT = "SEARCH_TEXT_RESULT";
export const searchChapter = id => {
    return {
        type: SEARCH_CHAPTER,
        id
    }
};
export const searchSection = chapterId => {
    return {
        type: SEARCH_SECTION,
        chapterId
    }
};
export const searchText = sectionId => {
    return {
        type: SEARCH_TEXT,
        sectionId
    }
};
export const Ajax = (action,type,url,id) => dispatch => {
    dispatch(action(id));
    return fetch(`${url}?id=${id}`)
        .then(response => response.json())
        .then(json => dispatch(result(type,json,id)))
};
export const result = (type,json,id) => ({
    type: type,
    id:id,
    list: json.data
});
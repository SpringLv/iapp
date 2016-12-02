export const SEARCH_CHAPTER = "SEARCH_CHAPTER";
export const SEARCH_CHAPTER_RESULT = "SEARCH_CHAPTER_RESULT";
export const SEARCH_CHAPTER_SECTION = "SEARCH_CHAPTER_SECTION";

export const RENDER_TEXT = "RENDER_TEXT";
export const RENDER_TEXT_RESULT = "RENDER_TEXT_RESULT";

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
export const searchChapterSection = item => {
    return {
        type: SEARCH_CHAPTER_SECTION,
        item
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
export const renderText = articleId => {
    return {
        type: RENDER_TEXT,
        articleId
    }
};

export const Ajax = (action, type, url, id) => dispatch => {
    dispatch(action(id));
    return fetch(`${url}?id=${id}`,{credentials: 'include'})
        .then(response => response.json())
        .then(json => dispatch(result(type, json, id)))
};
export const checkType = (type, json) => {
    switch (type) {
        case SEARCH_CHAPTER_RESULT:
            return json.chapterList
        case SEARCH_SECTION_RESULT:
            return json.sectionList
        case SEARCH_TEXT_RESULT:
            return json.articleList
        case RENDER_TEXT_RESULT:
            return json.article
        default:
            return json
    }
}
export const result = (type, json, id) => ({
    type: type,
    id: id,
    list: checkType(type, json)
});
import {
    SEARCH_CHAPTER,
    SEARCH_SECTION,
    SEARCH_TEXT,
    SEARCH_TEXT_RESULT,
    SEARCH_CHAPTER_RESULT,
    SEARCH_SECTION_RESULT,
    SEARCH_CHAPTER_SECTION,
    RENDER_TEXT,
    RENDER_TEXT_RESULT
} from "../actions/Paper"

const GetList = (state = [], action = {}) => {

    switch (action.type) {
        case SEARCH_CHAPTER:
            return {
                ...state
            };
        case SEARCH_CHAPTER_RESULT:
            return {
                ...state,
                chapterList: action.list
            };
        case SEARCH_CHAPTER_SECTION:
            return {
                ...state,
                textList:[],
                sectionList: action.item.sectionList
            };
        case SEARCH_SECTION:
            return {
                ...state
            };
        case SEARCH_SECTION_RESULT:
            return {
                ...state,
                textList: action.list
            };
        case SEARCH_TEXT:
            return {
                ...state
            };
        case SEARCH_TEXT_RESULT:
            return {
                ...state,
                textList: action.list
            };
        case RENDER_TEXT:
            return {
                ...state
            };
        case RENDER_TEXT_RESULT:
            return {
                ...state,
                article:action.list
            };
        default:
            return state
    }
};

export default GetList;
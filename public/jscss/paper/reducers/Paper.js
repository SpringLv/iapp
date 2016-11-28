import {
    SEARCH_CHAPTER,
    SEARCH_SECTION,
    SEARCH_TEXT,
    SEARCH_TEXT_RESULT,
    SEARCH_CHAPTER_RESULT,
    SEARCH_SECTION_RESULT
} from "../actions/Paper"

const GetList = (state = [], action = {}) => {

    switch (action.type) {
        case SEARCH_CHAPTER:
            return {
                ...state
            }
        case SEARCH_CHAPTER_RESULT:
            return {
                ...state,
                chapterList: action.list
            };
        case SEARCH_SECTION:
            return {
                ...state
            };
        case SEARCH_SECTION_RESULT:
            return {
                ...state,
                chapterId:action.id,
                sectionList:action.list
            }
        case SEARCH_TEXT:
            return {
                ...state
            };
        case SEARCH_TEXT_RESULT:
            return {
                ...state,
                sectionId:action.id,
                textList:action.list
            }
        default:
            return state
    }
};

export default GetList;
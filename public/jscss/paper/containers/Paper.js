import PaperList from "../components/Paper"
import { connect } from "react-redux"
import style from "../components/Paper.less"
import {
    SEARCH_CHAPTER,
    SEARCH_SECTION,
    SEARCH_TEXT,
    SEARCH_TEXT_RESULT,
    SEARCH_CHAPTER_RESULT,
    SEARCH_SECTION_RESULT,
    searchChapter,
    searchSection,
    searchText,
    Ajax
} from "../actions/Paper"
class Paper extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    render() {
        const chapterItems = this.props.chapterList.map(item=> {
            item.name = item.cityName;
            item.id = item.cityCode;
            return item;
        });
        const sectionItems = this.props.sectionList.map(item=> {
            item.name = item.cityName;
            item.id = item.cityCode;
            return item;
        });
        const textItems = this.props.textList.map(item=> {
            item.name = item.cityName;
            item.id = item.cityCode
            return item;
        });
        return (
            <div>
                <div className="blog-top" ref="topper"></div>
                <div className="blog-container" ref="container">
                    <div className="blog-toolbar"
                         ref="toolbar"
                         onClick={this.searchChapter.bind(this,"","")}
                        >
                        目录
                    </div>
                    <div className="blog-body" ref="content">
                        <PaperList
                            className="blog-chapter"
                            items={chapterItems||[]}
                            _this={this}
                            EditItem={this.searchSection}
                            >
                        </PaperList>
                        <PaperList
                            className="blog-section"
                            items={sectionItems||[]}
                            _this={this}
                            EditItem={this.searchText}
                            >
                        </PaperList>
                        <PaperList
                            className="blog-text"
                            items={textItems||[]}
                            _this={this}
                            EditItem={this.renderText}
                            >
                        </PaperList>
                    </div>
                </div>
            </div>
        )
    }

    searchChapter(item, index) {
        this.props.getList(searchChapter,SEARCH_CHAPTER_RESULT,'/cityList',1);
    }

    searchSection(item, index) {
        this.props.getList(searchSection,SEARCH_SECTION_RESULT,'/blog/section',item.id);
    }
    searchText(item, index) {
        this.props.getList(searchText,SEARCH_TEXT_RESULT,'/blog/text',item.id);
    }
    renderText(item, index) {
        //console.log(item, index);
        //this.props.getList(searchText,SEARCH_TEXT,'/cityList',item.id);
    }

}
const mapStateToProps = state => {
    return {
        sectionList: state.sectionList || [],
        sectionId: state.chapterId || "",
        chapterList: state.chapterList || [],
        chapterId: state.chapterId || "",
        textList: state.textList || [],
        textId: state.textId || ""
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getList: (action, type, url, id) => dispatch(Ajax(action, type, url, id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Paper);
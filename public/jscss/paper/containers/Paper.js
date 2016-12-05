import PaperList from "../components/Paper"
import { connect } from "react-redux"
import PaperContent from '../components/PaperContent'
import style from "../components/Paper.less"
import {
    SEARCH_CHAPTER,
    SEARCH_SECTION,
    SEARCH_TEXT,
    SEARCH_TEXT_RESULT,
    SEARCH_CHAPTER_RESULT,
    SEARCH_SECTION_RESULT,
    SEARCH_CHAPTER_SECTION,
    RENDER_TEXT,
    RENDER_TEXT_RESULT,
    searchChapterSection,
    searchChapter,
    searchSection,
    searchText,
    renderText,
    Ajax
} from "../actions/Paper"
class Paper extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.searchChapter();
    }

    render() {
        const chapterItems = this.props.chapterList.map(item=> {
            return item;
        });
        const sectionItems = this.props.sectionList.map(item=> {
            return item;
        });
        const textItems = this.props.textList.map(item=> {
            return item;
        });
        return (
            <div>
                <div className="blog-top" ref="topper"></div>

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
                        notCount="ok"
                        >
                    </PaperList>
                    <PaperContent
                        className="blog-content"
                        _this={this}
                        content={this.props.article||{}}
                        >
                    </PaperContent>

                </div>
            </div>
        )
    }

    drag (){
        console.log(event.target)
    }

    searchChapter() {
        this.props.getList(searchChapter,SEARCH_CHAPTER_RESULT,'blogScanner.json',"");
    }

    searchSection(item, index) {
        this.props.dispatch(searchChapterSection(item));
    }

    searchText(item, index) {
        this.props.getList(searchText,SEARCH_TEXT_RESULT,'blogArticleList.json',item.id);
    }

    renderText(item, index) {
        this.props.getList(renderText,RENDER_TEXT_RESULT,'blogArticleDetail.json',item.id);
    }

    compositionStyle() {
        const windowHeight = $(window).height();
        const topHeight = 40;
        $(".blog-chapter ul").height(windowHeight-topHeight);
        $(".blog-section ul").height(windowHeight-topHeight);
        $(".blog-text ul").height(windowHeight-topHeight);
    }

    componentDidUpdate() {
        this.compositionStyle();
    }

}
const mapStateToProps = state => {
    return {
        sectionList: state.sectionList || [],
        chapterList: state.chapterList || [],
        textList: state.textList || [],
        article: state.article || {}
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getList: (action, type, url, id) => dispatch(Ajax(action, type, url, id)),
        dispatch: item => dispatch(item)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Paper);
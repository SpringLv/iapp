import MenuTree from './MenuTree'
import IntuitiveTree from './IntuitiveTree'
import MenuTreeStyle from './MenuTree.scss'
import IntuitiveTreeStyle from './IntuitiveTree.scss'
import { connect } from 'react-redux'
import { selectNode, fetchPostsIfNeeded, invalidateNode } from '../actions/MenuTree'

class Main extends React.Component {
    componentDidMount() {
        const { dispatch, selectedNode } = this.props;
        dispatch(fetchPostsIfNeeded(selectedNode))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedNode !== this.props.selectedNode) {
            const { dispatch, selectedNode } = nextProps;
            dispatch(fetchPostsIfNeeded(selectedNode))
        }
    }

    render() {
        return (
            <div className="main-page" ref="main">
                <IntuitiveTree
                    nodeList={this.props.posts}>
                </IntuitiveTree>
                <MenuTree
                    nodeList={this.props.posts}
                    getNodeList={this.getNodeList.bind(this)}>
                </MenuTree>
            </div>
        )
    }

    getNodeList(callback) {
        let k = setTimeout(()=> {
            callback();
            clearTimeout(k);
        }, 3000);
    }
}
Main.porpTypes = {
    selectedNode: React.PropTypes.string.isRequired,
    posts: React.PropTypes.array.isRequired,
    isFetching: React.PropTypes.bool.isRequired,
    lastUpdated: React.PropTypes.number,
    dispatch: React.PropTypes.func.isRequired
};


const mapStateToProps = state => {
    const { selectedNode, postsByNode } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
        } = postsByNode[selectedNode] || {
        isFetching: true,
        items: []
    }

    return {
        selectedNode,
        posts,
        isFetching,
        lastUpdated
    }
};

export default connect(mapStateToProps)(Main);
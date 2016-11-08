import IntuitiveTree from './IntuitiveTree';
import MenuTree from './MenuTree';
import IntuitiveTreeStyle from './IntuitiveTree.scss';
import MenuTreeStyle from './MenuTree.scss';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nodeList:[]
        }
    }
    componentWillMount() {
        $.post("/treeList").then(res=> {
            this.setState({nodeList: res.data});
        })
    }
    render() {
        return(
            <div className="main-page" ref="main">
                <IntuitiveTree
                    nodeList={this.state.nodeList}
                    parentDom={this}
                    >
                </IntuitiveTree>
                <MenuTree
                    nodeList={this.state.nodeList}
                    parentDom={this}
                    >
                </MenuTree>
            </div>
        )
    }
}
export default Main;
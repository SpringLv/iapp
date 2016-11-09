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
        console.log(this.state.nodeList)
        return(
            <div className="main-page" ref="main">
                <IntuitiveTree
                    nodeList={this.state.nodeList}
                    getNodeList={this.getNodeList.bind(this)} >
                </IntuitiveTree>
                <MenuTree
                    nodeList={this.state.nodeList}
                    getNodeList={this.getNodeList.bind(this)} >
                </MenuTree>
            </div>
        )
    }
    getNodeList(callback) {
        let k = setTimeout(()=>{
            callback();
            //$.post("/treeList").then(res=> {
            //    this.setState({nodeList: []});
            //});
            clearTimeout(k);
        },3000);
    }
}
export default Main;
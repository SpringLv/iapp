let LastNodeNum = 0;
class MenuTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodeList: []
        }
    }

    componentWillMount() {
        console.log(this.props.nodeList);
    }

    render() {
        let __this = this;
        if(!this.props.nodeList.length) return <div></div>;
        function treeNodes(node) {
            MenuTree.ResetWidth(LastNodeNum);
            let temp = [];
            if (node.length > 1) {
                node.forEach((item)=> {
                    temp.push(
                        <li>
                            <a href="javascript:;">
                                <span className="tree-icon" onClick={__this.handleClick.bind(__this)}></span>
                                <span className="dom-hide"><div></div></span>
                                <span>{item.name}</span>
                            </a>
                            {item.children.length > 1 ? (<ul>{treeNodes(item.children)}</ul>) : treeNodes(item.children,++LastNodeNum)}
                        </li>
                    )
                });
            } else {
                node.forEach((item)=> {
                    temp.push(
                        <ul>
                            <li>
                                <a href="javascript:;">
                                    <span className="tree-icon" onClick={__this.handleClick.bind(__this)}></span>
                                    <span className="dom-hide"><div></div></span>
                                    <span>{item.name}</span>
                                </a>
                                {item.children.length > 1 ? (<ul>{treeNodes(item.children)}</ul>) : treeNodes(item.children,++LastNodeNum)}
                            </li>
                        </ul>
                    )
                });
            }
            return temp;
        }
        return (
            <div className="menu-tree">
                {treeNodes(this.props.nodeList)}
            </div>
        )

    }
    static ResetWidth(data) {
        //console.log(data);
    }
    handleClick() {
        let dom = event.target;
        dom.nextElementSibling.className = "icon-clip-rotate";
        this.props.getNodeList(()=>{
            dom.className = "tree-icon icon-down";
            dom.nextElementSibling.className = "dom-hide";
        });
    }
}
export default MenuTree;
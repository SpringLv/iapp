let LastNodeNum = 0;
class IntuitiveTree extends React.Component {
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
        if(!this.props.nodeList.length) return <div></div>;
        function treeNodes(node) {
            IntuitiveTree.ResetWidth(LastNodeNum);
            let temp = [];
            console.log(node.length)
            if (node.length > 1) {
                node.forEach((item)=> {
                    temp.push(
                        <li>
                            <a href="javascript:;">{item.name}</a>
                            {item.children.length > 1  ? (<ul>{treeNodes(item.children)}</ul>) : treeNodes(item.children,++LastNodeNum)}
                        </li>
                    )
                });
            } else {
                node.forEach((item)=> {
                    temp.push(
                        <ul>
                            <li>
                                <a href="javascript:;">{item.name}</a>
                                {item.children.length > 1 ? (<ul>{treeNodes(item.children)}</ul>) : treeNodes(item.children,++LastNodeNum)}
                            </li>
                        </ul>
                    )
                });
            }
            return temp;
        }
        return (
            <div className="intuitive-tree">
                {treeNodes(this.props.nodeList)}
            </div>
        )

    }
    static ResetWidth(data) {
        console.log(data);
    }
}
export default IntuitiveTree;
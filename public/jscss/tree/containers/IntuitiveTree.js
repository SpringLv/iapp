class IntuitiveTree extends React.Component {

    constructor(props) {
        super(props);
        this.LastNodeNum = 0;
    }
    render() {
        let __this = this;
        __this.LastNodeNum = 0;
        if (!this.props.nodeList.length) return <div></div>;
        function treeNodes(node) {
            __this.ResetWidth(__this.LastNodeNum);
            let temp = [];
            if (node.length > 1) {
                node.forEach((item)=> {
                    temp.push(
                        <li>
                            <a href="javascript:;">{item.name}</a>
                            {item.children&&item.children.length > 1 ?
                                (<ul>{treeNodes(item.children)}</ul>) :
                                treeNodes(item.children,item.children&&item.children.length==0 && ++__this.LastNodeNum)}
                        </li>
                    )
                });
            } else {
                node.forEach((item)=> {
                    temp.push(
                        <ul>
                            <li>
                                <a href="javascript:;">{item.name}</a>
                                {item.children&&item.children.length > 1 ?
                                    (<ul>{treeNodes(item.children)}</ul>) :
                                    treeNodes(item.children,item.children&&item.children.length==0 && ++__this.LastNodeNum)}
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

    ResetWidth(data) {}
}

IntuitiveTree.propTypes = {
    nodeList: React.PropTypes.array.isRequired
}

export default IntuitiveTree;
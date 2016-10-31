import TOOL from '../index/Util'
class CreateTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        $.post("/treeList").then(res=> {
            this.setState({list: res.data});
        })
    }

    render() {
        let node = this.state.list;
        if(!node.length) return <div></div>;
        function treeNodes(node) {
            console.log(TOOL.TREELENGTH);
            let temp = [];
            if (node.length > 1) {
                node.forEach((item, index)=> {
                    temp.push(
                        <li>
                            <a href="javascript:;">{item.name}</a>
                            {item.children.length ? (<ul>{treeNodes(item.children)}</ul>) : treeNodes(item.children,++TOOL.TREELENGTH)}
                        </li>
                    )
                });
            } else {
                node.forEach((item, index)=> {
                    temp.push(
                        <ul>
                            <li>
                                <a href="javascript:;">{item.name}</a>
                                {item.children.length ? (<ul>{treeNodes(item.children)}</ul>) : treeNodes(item.children,++TOOL.TREELENGTH)}
                            </li>
                        </ul>
                    )
                });
            }
            return temp;
        }
        return (
            <div id="tree">
                {treeNodes(node)}
            </div>
        )

    }
}
export default CreateTree;
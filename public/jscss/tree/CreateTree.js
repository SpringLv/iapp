import TOOL from '../index/Util'
let a=0;

class CreateTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            len:0
        }
    }

    componentWillMount() {
        $.post("/treeList").then(res=> {
            this.setState({list: res.data});
        })
    }

    render() {
        if(!this.state.list.length) return <div></div>;
        function treeNodes(node) {
            CreateTree.ResetWidth(a);
            let temp = [];
            if (node.length > 1) {
                node.forEach((item)=> {
                    temp.push(
                        <li>
                            <a href="javascript:;">{item.name}</a>
                            {item.children.length ? (<ul>{treeNodes(item.children)}</ul>) : treeNodes(item.children,++a)}
                        </li>
                    )
                });
            } else {
                node.forEach((item)=> {
                    temp.push(
                        <ul>
                            <li>
                                <a href="javascript:;">{item.name}</a>
                                {item.children.length ? (<ul>{treeNodes(item.children)}</ul>) : treeNodes(item.children,++a)}
                            </li>
                        </ul>
                    )
                });
            }
            return temp;
        }
        return (
            <div id="tree">
                {treeNodes(this.state.list)}
            </div>
        )

    }

    static ResetWidth(data) {
        console.log(data);
    }
}
export default CreateTree;
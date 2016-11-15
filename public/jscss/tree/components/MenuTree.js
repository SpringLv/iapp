import React, { Component, PropTypes } from 'react'
class MenuTree extends Component {

    static propTypes = {
        nodeList: PropTypes.array.isRequired,
        getNodeList: PropTypes.func.isRequired
    };

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
                            <a href="javascript:void(0)">
                                <span className={item.children && item.children.length > 0?"tree-icon icon-down":"tree-icon"} onClick={__this.handleClick.bind(__this)}></span>
                                <span className="dom-hide"><div></div></span>
                                <span>{item.name}</span>
                            </a>
                            {item.children && item.children.length > 1 ?
                                (<ul>{treeNodes(item.children)}</ul>) :
                                treeNodes(item.children, item.children && item.children.length == 0 && ++__this.LastNodeNum)}
                        </li>
                    )
                });
            } else {
                node.forEach((item)=> {
                    temp.push(
                        <ul>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className={item.children && item.children.length > 0?"tree-icon icon-down":"tree-icon"} onClick={__this.handleClick.bind(__this)}></span>
                                    <span className="dom-hide"><div></div></span>
                                    <span>{item.name}</span>
                                </a>
                                {item.children && item.children.length > 1 ?
                                    (<ul>{treeNodes(item.children)}</ul>) :
                                    treeNodes(item.children, item.children && item.children.length == 0 && ++__this.LastNodeNum)}
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

    ResetWidth(data) {}

    handleClick() {
        let dom = event.target;
        let domUl = dom.parentNode.nextElementSibling;
        if(dom.className.indexOf("icon-down") > -1) {
            dom.className = "tree-icon";
            domUl.className = "dom-hide";
            return;
        }
        dom.nextElementSibling.className = "icon-clip-rotate";
        this.props.getNodeList(()=> {
            if(domUl){
                dom.className = "tree-icon icon-down";
                domUl.className = "";
            }
            dom.nextElementSibling.className = "dom-hide";
        });
    }
}

export default MenuTree;
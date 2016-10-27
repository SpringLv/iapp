class SelectList extends React.Component {

    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }

    render() {
        const items = [];
        if(!this.state.list.length) return (<div></div>);
        this.state.list.forEach((item,index)=> {
            items.push(
                <li onClick={this.props.parentDom.EditItem.bind(this.props.parentDom,item,index,"add")}>
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                </li>
            )
        })
        return (
            <div className="email-selectList-box">
                <ul>{items}</ul>
            </div>
        )
    }
}
export default SelectList;
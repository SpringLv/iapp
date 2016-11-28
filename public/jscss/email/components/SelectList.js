class SelectList extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        const items = [];
        if(!this.props.items.length) return (<div></div>);
        this.props.items.forEach((item,index)=> {
            items.push(
                <li onClick={this.props.EditItem.bind(this.props._this,item,index,"add")}>
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
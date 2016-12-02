class Paper extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let items = [];
        let count = "";
        if (!this.props.items.length) return (<div></div>);
        this.props.items.forEach((item, index)=> {
            if(item.count){
                count = <span>{item.count}</span>
            }else{
                count = ""
            }
            items.push(
                <li onClick={this.props.EditItem.bind(this.props._this,item, index)}>
                    <span>{item.name || item.title}</span>
                    {count}
                </li>
            )
        });
        return (
            <div className={this.props.className}>
                <ul>{items}</ul>
            </div>
        )
    }
}
export default Paper;
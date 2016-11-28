class Paper extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let items = [];
        if (!this.props.items.length) return (<div></div>);
        this.props.items.forEach((item, index)=> {
            items.push(
                <li>
                    <span onClick={this.props.EditItem.bind(this.props._this,item, index)}>{item.name}</span>
                </li>
            )
        });
        return (
            <div>
                <ul>{items}</ul>
            </div>
        )
    }
}
export default Paper;
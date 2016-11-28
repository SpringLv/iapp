class RecipientsList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const items = [];
        if (!this.props.items.length) return (<div></div>);
        this.props.items.forEach((item, index)=> {
            items.push(
                <li>
                    <span>{item.name}</span>
                    <span onClick={this.props.EditItem.bind(this.props._this,item, index, "del")}>X</span>
                </li>
            )
        });
        return (
            <div ref="recipientsList" className="email-recipientsList-box">
                <ul>{items}</ul>
            </div>
        )
    }
}
export default RecipientsList;
class RecipientsList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const items = [];
        if (!this.props.list.length) return (<div></div>);
        this.state.list.forEach((item, index)=> {
            items.push(
                <li>
                    <span>{item.name}</span>
                    <span onClick={this.props.parentDom.EditItem.bind(this.props.parentDom, item, index, "del")}>X</span>
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
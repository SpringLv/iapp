class RecipientsList extends React.Component {

    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }

    render() {
        const items = [];
        if(!this.state.list.length) return (<div></div>);
        for(let item of this.state.list) {
            items.push(
                <li onTap={this.todoSelected.bind(this)}>
                    <span>{item.name}-{item.email}</span>
                    <span>X</span>
                </li>
            )
        }
        return (
            <div ref="recipientsList" className="email-recipientsList-box">
                <ul>{items}</ul>
            </div>
        )
    }

    todoSelected() {
        console.log("todoSelected:"+event.target.innerText);
    }
}
export default RecipientsList;
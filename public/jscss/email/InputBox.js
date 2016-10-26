class InputBox extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            value:""
        }
    }

    render() {
        return (
            <div ref="inputBox" className="email-input-box">
                <input type="text" className="email-input" onFocus={this.handleFocus.bind(this)} />
            </div>
        )
    }

    handleFocus() {

    }
}
export default InputBox
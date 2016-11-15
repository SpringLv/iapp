class InputBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }

    render() {
        return (
            <div ref="inputBox" className="email-input-box">
                <input type="text" className="email-input"
                       onInput={this.props.parentDom.InputBoxInput.bind(this.props.parentDom)}
                       value={this.state.inputValue} />
            </div>
        )
    }
}
export default InputBox
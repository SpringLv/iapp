"use strict";
class InputBox extends React.Component {

    render() {
        const { InputBoxInput, _this } = this.props;
        const color = {color:'red'};
        if (!InputBoxInput || !_this) {
            return <div style={color}>'InputBoxInput' and '_this' is required</div>
        }
        return (
            <div className="email-input-box">
                <input type="text" className="email-input"
                       onInput={InputBoxInput.bind(_this)}
                       defaultvalue=""/>
            </div>
        )
    }
}
export default InputBox
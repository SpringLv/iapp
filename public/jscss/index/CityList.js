import Util from './Util'
class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        }
    }

    componentWillMount() {
        $.getJSON('/list', res => {
            this.setState({list: res.data})
        });
    }

    render() {
        if (this.state.list) {
            let item = [];
            for (let i of this.state.list) {
                item.push(<li onClick={this.handleClick.bind(this)} className="city-item"
                              data-code={i.cityCode}>{i.cityName}</li>);
            }
            return (<ul className="list-box">
                    {item}
                </ul>
            )
        } else {
            return <div>加载中...</div>
        }
    }

    handleClick() {

    }
}

export default CityList;
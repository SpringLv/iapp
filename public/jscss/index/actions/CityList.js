import Util from './Util'
class CityList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: null
        }
    }

    render() {
        if (this.state.list) {
            let item = [];
            for (let i of this.state.list) {
                item.push(<li onClick={this.handleClick.bind(this)} className="city-item"
                              data-code={i.cityCode}>{i.cityName}</li>);
            }
            return (<div ref="list">
                        <ul className="list-box">
                            {item}
                        </ul>
                    </div>
            )
        } else {
            return <div className="dom-hide"></div>
        }
    }

    handleClick() {
        this.props.parentDom.refs.deptList.refs.list.className = "";
        this.props.parentDom.refs.bossList.refs.list.className = "";
        this.props.parentDom.setState({cityName:event.target.innerHTML});
        this.setState({list:null});
    }
}

export default CityList;
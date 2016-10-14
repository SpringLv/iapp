import SearchList from './SearchList';
import Util from './Util';
import DeptList from './Department';
import BossList from './BossList';

class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello!',
            cityName: "定位",
            disable: false
        }
    }

    componentWillMount() {
        if (Util.PUB_STATUS.CITY.cityName) this.setState({cityName: Util.PUB_STATUS.CITY.cityName})
        if (Util.PUB_STATUS.CITY.cityCode) this.setState({cityCode: Util.PUB_STATUS.CITY.cityCode})
    }

    render() {
        if (this.state.disable) {
            SearchInput.maskAndPosition(true);
            return (
                <div>
                    <div className="form-group">
                        <div className="app-row">
                            <div className="app-flex-3">
                                <a href="#/cityList" id="cityName">{this.state.cityName}</a>
                            </div>
                            <div className="app-flex-7">
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           onInput={this.handleChange.bind(this)} id="searchInput"
                                           placeholder="搜索"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-box">
                        <SearchList id="searchList" value={this.state.value}></SearchList>
                    </div>
                </div>
            );
        } else {
            SearchInput.maskAndPosition(false);
            return (
                <div>
                    <div className="form-group">
                        <div className="app-row">
                            <div className="app-flex-3">
                                <a href="#/cityList" id="cityName">{this.state.cityName}</a>
                            </div>
                            <div className="app-flex-7">
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           onInput={this.handleChange.bind(this)} id="searchInput"
                                           placeholder="搜索"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DeptList></DeptList>
                    <BossList></BossList>
                </div>
            );
        }
    }

    handleChange() {
        this.setState({value: event.target.value});
        if (event.target.value == "") {
            this.setState({disable: false});
        } else {
            this.setState({disable: true});
        }
    }

    static maskAndPosition(flag) {
        if (flag) {
            $(".mask").show()
            $(".app-flex-3").hide()
        } else {
            $(".mask").hide()
            $(".app-flex-3").show()
        }
    }
}
export default SearchInput
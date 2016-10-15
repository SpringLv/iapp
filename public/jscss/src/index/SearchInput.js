import SearchList from './SearchList';
import Util from './Util';
import DeptList from './Department';
import BossList from './BossList';
import ScrollTouch from '../util/ScrollTouch'

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
                {this.state.disable ? (<div className="table-box">
                    <SearchList id="searchList" value={this.state.value}></SearchList>
                </div>) : ""}
                {SearchInput.maskAndPosition(this.state.disable ? true : false)}
                <DeptList></DeptList>
                <BossList></BossList>
                <ScrollTouch todo={this.addPager}></ScrollTouch>
            </div>
        )
    }

    handleChange() {
        this.setState({value: event.target.value});
        if (event.target.value == "") {
            this.setState({disable: false});
        } else {
            this.setState({disable: true});
        }
    }

    addPager() {
        console.log("加载页面拉")
    }

    static maskAndPosition(flag) {
        if (flag) {
            $(".mask").removeClass("dom-hide");
            $(".app-flex-3").addClass("dom-hide");
            $(".department-list").addClass("dom-hide");
            $(".boss-list").addClass("dom-hide");
            $(".loading-more-box").addClass("dom-hide");
        } else {
            $(".mask").addClass("dom-hide");
            $(".app-flex-3").removeClass("dom-hide");
            $(".department-list").removeClass("dom-hide");
            $(".boss-list").removeClass("dom-hide");
            $(".loading-more-box").removeClass("dom-hide");
        }
    }
}
export default SearchInput
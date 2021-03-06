import SearchList from './SearchList';
import Util from './Util';
import DeptList from './Department';
import BossList from './BossList';
import CityList from './CityList';

class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello!',
            cityName: "选择",
            disable: false,
            cityListDisable:true
        }
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <div className="app-row">
                        <div className="app-flex-3">
                            <div onClick={this.handleCityList.bind(this)} id="cityName">{this.state.cityName}</div>
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
                <DeptList ref="deptList"></DeptList>
                <BossList ref="bossList"></BossList>
                <CityList ref="cityList" parentDom={this}></CityList>
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

    handleCityList() {
        $.getJSON('/cityList', res => {
            this.refs.cityList.setState({list:res.data})
            this.refs.deptList.refs.list.className="dom-hide";
            this.refs.bossList.refs.list.className="dom-hide";
        });
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
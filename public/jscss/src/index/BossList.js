import Util from './Util'
import ScrollTouch from '../util/ScrollTouch'
class BossList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: null,
            pageNumber:0
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.addPager();
    }

    componentWillUpdate() {
        //console.log("ssss")
        //$.getJSON('/bossList?page='+this.state.pageNumber).then(res=> {
        //    for(let item of res.data){
        //        Util.BOSSLIST_DATA.push(item);
        //    }
        //    this.setState({list: Util.BOSSLIST_DATA});
        //})
    }
    componentDidUpdate() {
        console.log('sss11')

    }

    componentWillUnmount() {
        //console.log("UN")
    }

    render() {
        if (this.state.list) {
            let tempList = [];
            let emp;
            for (let item of this.state.list) {
                emp = (<li className="boss-item">
                    <div className="boss-img-box"><img src="/images/2.jpg" width="90px"/></div>
                    <div className="boss-name-des">
                        <span className="boss-name">{item.bossName}</span>
                        <span className="boss-des">{item.des}</span>
                    </div>
                </li>)
                tempList.push(emp)
            }
            return (
                <div>
                    <div className="boss-list">
                        <div className="list-title">BOSS</div>
                        <ul>{tempList}</ul>
                    </div>
                    <ScrollTouch todo={this.addPager.bind(this)}></ScrollTouch>
                </div>
            )
        }
        return (<div></div>)
    }

    addPager(childrenDom) {
        if(this.state.pageNumber > 5) {
            childrenDom && (childrenDom.innerHTML="就这么多了，亲~");
            return;
        }
        $.getJSON('/bossList?page='+(++this.state.pageNumber)).then(res=> {
            for(let item of res.data){
                Util.BOSSLIST_DATA.push(item);
            }
            this.setState({list: Util.BOSSLIST_DATA,pageNumber:this.state.pageNumber});
            childrenDom && (childrenDom.innerHTML="下拉加载")
        })
    }

}
export default BossList;
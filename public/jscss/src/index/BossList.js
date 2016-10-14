class BossList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: null
        }
    }

    componentWillMount() {
        $.getJSON('/bossList').then(res=> {
            this.setState({list: res.data});
            //console.log(res.data);
        })
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
                <div className="boss-list">
                    <div className="list-title">BOSS</div>
                    <ul>{tempList}</ul>
                </div>
            )
        }
        return (<div></div>)
    }
}
export default BossList;
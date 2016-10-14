class BossList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: null
        }
    }

    componentWillMount() {
        $.getJSON('/bossList').then(res=>{
            this.setState({list:res.data})
        })
    }

    render() {
        if(this.state.list){
            let tempList = [];
            for(let item of this.state.list){
                tempList.push(<li><img src="./../../images/1.jpg" width="80%"/><br/>{item.bossName}</li>)
            }
            return (
                <div className="boss-list">
                    <div className="list-title">老板</div>
                    <ul>{tempList}</ul>
                </div>
            )
        }
        return (<div></div>)
    }
}
export default BossList;
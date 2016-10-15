class Department extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: null,
            pageNumber:1
        }
    }

    componentWillMount() {
        $.getJSON('/deptList').then(res=> {
            this.setState({list: res.data})
        })
    }

    render() {
        if (this.state.list) {
            let tempList = [];
            for (let item of this.state.list) {
                tempList.push(<li><img src="/images/1.jpg" width="80%"/><br/>{item.deptName}</li>)
            }
            return (
                <div className="department-list">
                    <div className="list-title">分类</div>
                    <ul>{tempList}</ul>
                </div>
            )
        }
        return (<div></div>)
    }
}
export default Department;
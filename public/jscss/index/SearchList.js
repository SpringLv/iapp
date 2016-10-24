class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            loading:false
        }
    }

    componentWillMount() {
        this.setState({loading:true});
        $.getJSON('/searchList', res => {
            this.setState({list: res.data})
            this.setState({loading:false});
        });
    }

    render() {
        if (this.state.list) {
            let TempList = [];
            let list = this.state.list;
            for (let item of list) {
                let index = item.name.indexOf(this.props.value);
                let len = this.props.value.length;
                if(this.props.value && index>-1){
                    TempList.push(
                        <tr>
                            <td>
                                {item.name.substring(0,index)}
                                <span className="app-color-blue">{this.props.value}</span>
                                {item.name.substring(index+len)}
                            </td>
                            <td>{item.age}</td>
                            <td>{item.code}</td>
                        </tr>
                    )
                }
            }
            if(TempList.length)
            return (
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Code</th>
                    </tr>
                    </thead>
                    <tbody>
                    {TempList}
                    </tbody>
                </table>
            )
        }
        if(this.state.loading){
            return (<div className="search-state">正在搜索...</div>)
        }else{
            return (<div className="search-state">找不到了...</div>)
        }
    }
}
export default SearchList;
class ScrollTouch extends React.Component {

    static um(){
        return({
            "nothing":"就这么了",
            "loading":"加载中",
            "starting":"下拉加载"
        })
    }
    constructor(props) {
        super(props)
        this.state = {};
        this.moveInstance = 0;
    }

    events() {
        addEventListener('touchStart', this.Start, false);
        addEventListener('touchMove', this.Move, false);
        addEventListener('touchEnd', this.End, false);
    }

    Start() {

    }

    Move() {

    }

    End() {

    }

    AddDocuments() {

    }

    componentWillMount() {

    }

    render() {
        return(<div className="loading-more-box">{ScrollTouch.um().starting}</div>)
    }

    componentDidMount() {
        this.events();
    }
}
export default ScrollTouch;
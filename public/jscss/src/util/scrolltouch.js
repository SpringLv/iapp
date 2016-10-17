import Util from '../index/Util'
class ScrollTouch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            load: this.um().starting
        };
    }

    um() {
        return ({
            "nothing": "就这么了",
            "loading": "加载中",
            "starting": "下拉加载"
        })
    }

    Start() {
        Util.MOVEPOINT.START = (event.touches[0] || event.changedTouches[0]).clientY;
        //console.log("Touch started (" + event.touches[0].clientX +"," + event.touches[0].clientY +")")
    }

    Move() {
        //console.log("Touch moved (" + event.touches[0].clientX +"," + event.touches[0].clientY +")")
        //console.log("Touch movedPage (" + event.changedTouches[0].pageX +"," + event.touches[0].pageY +")")
    }

    End() {
        let now = new Date().getTime();
        if (now - Util.MOVEPOINT.INTERVAL < 700) return;
        Util.MOVEPOINT.INTERVAL = now;
        Util.MOVEPOINT.END = (event.touches[0] || event.changedTouches[0]).clientY;
        let y = Util.MOVEPOINT.START - Util.MOVEPOINT.END;
        let totalHeight = document.scrollingElement.scrollHeight;
        let domHeight = window.screen.height;
        let scrollHeight = document.scrollingElement.scrollTop;
        if (y >= 20 && (scrollHeight + domHeight) >= totalHeight) {
            this.setState({load: this.um().loading});
            this.props.todo(this.refs.loadingMoreBox);
        }
        //console.log(document.scrollingElement.scrollHeight);
        //console.log("Touch end (" + event.changedTouches[0].clientX +"," + event.changedTouches[0].clientY +")");
    }

    touchScroll() {
        let event = event || window.event;
        switch (event.type) {
            case 'touchstart':
                this.Start();
                break;
            case 'touchmove':
                //event.preventDefault();
                this.Move();
                break;
            case 'touchend':
                this.End();
                break;
        }

    }

    render() {
        return (<div className="loading-more-box" ref="loadingMoreBox">{this.state.load}</div>)
    }

    componentDidMount() {
        this.events();
    }

    events() {
        let _this = this;
        document.addEventListener('touchstart', ()=>{_this.touchScroll()}, false);
        document.addEventListener('touchmove', ()=>{_this.touchScroll()}, false);
        document.addEventListener('touchend', ()=>{_this.touchScroll()}, false);
    }
}
export default ScrollTouch;
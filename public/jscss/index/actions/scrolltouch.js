import Util from './Util'
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

    checkScroll(callback) {

        Util.MOVEPOINT.END = (event.touches[0] || event.changedTouches[0]).clientY;
        let y = Util.MOVEPOINT.START - Util.MOVEPOINT.END;
        let totalHeight = document.scrollingElement.scrollHeight;
        let domHeight = window.screen.height;
        let scrollHeight = document.scrollingElement.scrollTop;
        if (y >= 20 && (scrollHeight + domHeight) >= totalHeight) {
            this.setState({load: this.um().loading});
            let now = new Date().getTime();
            if (now - Util.MOVEPOINT.INTERVAL < 700) return;
            Util.MOVEPOINT.INTERVAL = now;
            callback&&callback(this.refs.loadingMoreBox);
        }else{
            //this.setState({load: this.um().starting});
        }
    }

    touchScroll() {
        let event = event || window.event;
        switch (event.type) {
            case 'touchstart':
                Util.MOVEPOINT.START = (event.touches[0] || event.changedTouches[0]).clientY;
                break;
            case 'touchmove':
                this.checkScroll(this.props.todo);
                break;
            case 'touchend':
                //this.checkScroll();
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
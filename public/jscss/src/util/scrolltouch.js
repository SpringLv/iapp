import Util from '../index/Util'
class ScrollTouch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            load:this.um().starting
        };
    }

    um(){
        return({
            "nothing":"就这么了",
            "loading":"加载中",
            "starting":"下拉加载"
        })
    }

    Start() {
        Util.MOVEPOINT.START = (event.touches[0]||event.changedTouches[0]).clientY;
        //console.log("Touch started (" + event.touches[0].clientX +"," + event.touches[0].clientY +")")
    }

    Move() {
        //console.log("Touch moved (" + event.touches[0].clientX +"," + event.touches[0].clientY +")")
        //console.log("Touch movedPage (" + event.changedTouches[0].pageX +"," + event.touches[0].pageY +")")
    }

    End() {
        let now = new Date().getTime();
        if(now-Util.MOVEPOINT.INTERVAL < 2000) return;
        Util.MOVEPOINT.INTERVAL = now;
        Util.MOVEPOINT.END = (event.touches[0]||event.changedTouches[0]).clientY;
        let y = Util.MOVEPOINT.START-Util.MOVEPOINT.END;
        let totalHeight = document.scrollingElement.scrollHeight;
        let domHeight = window.screen.height;
        let scrollHeight = document.scrollingElement.scrollTop;
        if(y>=30 && (scrollHeight+domHeight)>=totalHeight) {
            this.setState({load:this.um().loading})
            this.props.todo();
        }
        //console.log(document.scrollingElement.scrollHeight);
        //console.log("Touch end (" + event.changedTouches[0].clientX +"," + event.changedTouches[0].clientY +")");
    }

    touchScroll() {
        let event = event || window.event;
        switch (event.type){
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
        return(<div className="loading-more-box">{this.state.load}</div>)
    }

    componentDidMount() {
        this.events();
    }

    events() {
        document.addEventListener('touchstart',()=>{this.touchScroll()}, false);
        document.addEventListener('touchmove', ()=>{this.touchScroll()}, false);
        document.addEventListener('touchend', ()=>{this.touchScroll()}, false);
    }
}
export default ScrollTouch;
class PaperContent extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.content);
        if(this.props.content) return <div dangerouslySetInnerHTML={{__html:this.props.content.contentHtml}} className={this.props.className}></div>
        return <div></div>
    }
}
export default PaperContent;
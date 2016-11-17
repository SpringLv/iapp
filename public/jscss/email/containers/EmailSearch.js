import InputBox from '../components/InputBox'
import SelectList from '../components/SelectList'
import { connect } from 'react-redux'
import { doSearch, Ajax, delItem } from '../actions/EmailSearch'
//import RecipientsList from './RecipientsList';

class DoSearch extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        //<RecipientsList ref="recipientsList" parentDom={this}></RecipientsList>

        return (
            <div ref="doSearch" className="email-doSearch-box">
                <InputBox ref="inputBox" parentDom={this}></InputBox>
                <SelectList ref="selectList" parentDom={this} items={this.props.items}></SelectList>
            </div>
        )
    }

    InputBoxInput() {
        //console.log(this.props);
        this.props.doInput(event.target.value);
        //let val = event.target.value;
        //this.refs.inputBox.setState({inputValue:val});
        //if(val.split(";").length>1){
        //    this.MoreKeysSearch(val);
        //    return;
        //}
        //this.GetSelectList(val);
    }

    EditItem(item,index,state) {
        console.log("2")
        //if(!state) return;
        //const inputBox = this.refs.inputBox;
        //const recipientsList = this.refs.recipientsList;
        //const recipientsListState = recipientsList.state;
        //let list = recipientsListState.list;
        //if(state == "add") {
        //    list.push(item);
        //    inputBox.setState({inputValue:this.StringSub(inputBox.state.inputValue)});
        //}
        //if(state == "del") list.splice(index,1);
        //recipientsList.setState({list:list});
    }

    //GetSelectList(data,hook) {
    //    $.post('/emailList',{'name':data}).then(res=>{
    //        let inputValue = this.refs.inputBox.state.inputValue;
    //        if(res && res.data){
    //            if(hook && !res.data.length){
    //                inputValue = this.StringSub(inputValue);
    //                this.refs.inputBox.setState({inputValue:inputValue});
    //                this.MoreKeysSearch(inputValue);
    //            }
    //            this.refs.selectList.setState({list:res.data})
    //        }else{
    //
    //        }
    //    })
    //}

    //MoreKeysSearch(keys) {
    //    let k = keys.split(";");
    //    if(k.length==1) return;
    //    this.GetSelectList(k[0],true);
    //}
    //
    //StringSub(str){
    //    let k = str.substr(str.indexOf(";")+1);
    //    return k;
    //}
}
const mapStateToProps = state => {
    return {
        items:state.items||[]
    }
};
const mapDispatchToProps = dispatch => {
    return {
        doInput:value=>{
            dispatch(Ajax(value));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(DoSearch);
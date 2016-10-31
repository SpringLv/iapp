import InputBox from './InputBox';
import SelectList from './SelectList';
import RecipientsList from './RecipientsList';

class DoSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div ref="doSearch" className="email-doSearch-box">
                <RecipientsList ref="recipientsList" parentDom={this}></RecipientsList>
                <InputBox ref="inputBox" parentDom={this}></InputBox>
                <SelectList ref="selectList" parentDom={this}></SelectList>
            </div>
        )
    }

    InputBoxInput() {
        let val = event.target.value;
        this.refs.inputBox.setState({inputValue:val});
        if(val.split(";").length>1){
            this.MoreKeysSearch(val);
            return;
        }
        this.GetSelectList(val);
    }

    EditItem(item,index,state) {
        if(!state) return;
        const inputBox = this.refs.inputBox;
        const recipientsList = this.refs.recipientsList;
        const recipientsListState = recipientsList.state;
        let list = recipientsListState.list;
        if(state == "add") {
            list.push(item);
            inputBox.setState({inputValue:this.StringSub(inputBox.state.inputValue)});
        }
        if(state == "del") list.splice(index,1);
        recipientsList.setState({list:list});
    }

    GetSelectList(data,hook) {
        $.post('/emailList',{'name':data}).then(res=>{
            let inputValue = this.refs.inputBox.state.inputValue;
            if(res && res.data){
                if(hook && !res.data.length){
                    inputValue = this.StringSub(inputValue);
                    this.refs.inputBox.setState({inputValue:inputValue});
                    this.MoreKeysSearch(inputValue);
                }
                this.refs.selectList.setState({list:res.data})
            }else{

            }
        })
    }

    MoreKeysSearch(keys) {
        let k = keys.split(";");
        if(k.length==1) return;
        this.GetSelectList(k[0],true);
    }

    StringSub(str){
        let k = str.substr(str.indexOf(";")+1);
        return k;
    }

}
export default DoSearch;
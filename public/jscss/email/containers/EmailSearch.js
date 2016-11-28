import InputBox from '../components/InputBox'
import SelectList from '../components/SelectList'
import RecipientsList from '../components/RecipientsList'
import { connect } from 'react-redux'
import { doSearch, Ajax, delItem, addItem } from '../actions/EmailSearch'

class DoSearch extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div ref="doSearch" className="email-doSearch-box">
                <RecipientsList
                    _this={this}
                    EditItem={this.EditItem}
                    items={this.props.recipientsItems}>
                </RecipientsList>
                <InputBox
                    _this={this}
                    InputBoxInput={this.InputBoxInput}>
                </InputBox>
                <SelectList
                    _this={this}
                    EditItem={this.EditItem}
                    items={this.props.searchList}>
                </SelectList>
            </div>
        )
    }

    InputBoxInput(e) {
        this.props.doInput(e.target.value);
    }

    EditItem(item,index,state) {
        if(state == 'del') {
            this.props.delItem(index);
        }else if(state == 'add') {
            this.props.addItem(item);
        }
    }
}
const mapStateToProps = state => {
    return {
        searchList:state.searchList||[],
        recipientsItems:state.recipientsItems||[]
    }
};
const mapDispatchToProps = dispatch => {
    return {
        doInput:value=>{
            dispatch(Ajax(value));
        },
        addItem:item=>{
            dispatch(addItem(item));
        },
        delItem:index=>{
            dispatch(delItem(index));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(DoSearch);
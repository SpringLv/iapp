import InputBox from 'InputBox';
import SelectList from 'SelectList';
import RecipientsList from 'RecipientsList';

class DoSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div ref="doSearch" className="email-doSearch-box">
                <RecipientsList ref="recipientsList"></RecipientsList>
                <InputBox ref="inputBox"></InputBox>
                <SelectList ref="selectList"></SelectList>
            </div>
        )
    }

}
export default DoSearch;
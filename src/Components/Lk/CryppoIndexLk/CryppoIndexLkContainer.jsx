import { connect } from 'react-redux'
import CryppoIndexLk from './CryppoIndexLk'

let mapStateToProps = (state) => {
    return {
        card: state.cryppoIndexLk.cardData,
        bankCard: state.cryppoIndexLk.bankCardData,
    }
}

const CryppoIndexLkContainer = connect(mapStateToProps)(CryppoIndexLk);
export default CryppoIndexLkContainer
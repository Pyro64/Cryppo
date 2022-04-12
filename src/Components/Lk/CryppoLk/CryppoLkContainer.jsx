import { connect } from 'react-redux'
import CryppoLk from './CryppoLk'

let mapStateToProps = (state) => {
    return {
        card: state.cryppoIndexLk.cardData,
        bankCard: state.cryppoIndexLk.bankCardData,
    }
}

const CryppoLkContainer = connect(mapStateToProps)(CryppoLk);
export default CryppoLkContainer
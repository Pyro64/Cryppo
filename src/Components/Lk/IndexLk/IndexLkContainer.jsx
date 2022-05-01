import { connect } from 'react-redux'
import CryppoIndexLk from './CryppoIndexLk'

let mapStateToProps = (state) => {
    return {
        card: state.user.cardData,
        bankCard: state.user.bankCardData,
    }
}

const CryppoIndexLkContainer = connect(mapStateToProps)(CryppoIndexLk);
export default CryppoIndexLkContainer
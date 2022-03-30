import { connect } from "react-redux";
import { fetchBusinesses } from '../../actions/business_actions';
import Search from './search';

const mSTP = (state) => {
    return ({
        businesses: state.entities.businesses
    })
};

const mDTP = dispatch => {
    return {
        fetchBusinesses: (term) => dispatch(fetchBusinesses(term))
    };
};

export default connect(mSTP, mDTP)(Search)
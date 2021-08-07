import {connect} from 'react-redux';
import {fetchBusiness} from '../../actions/business_actions'
import Business from './business'

const msp = (state, ownProps) => {
    // debugger
    
    return {
    reviews: state.entities.reviews,
    businesses: state.entities.business[ownProps.match.params.businessId]
    }
};

const mdp = dispatch => ({
    fetchRestaurant: businessId => dispatch(fetchRestaurant(businessId))
});


  

export default connect(msp,mdp)(Restaurant)
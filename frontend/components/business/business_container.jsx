import { connect } from "react-redux";
import {
  fetchBusiness,
} from "../../actions/business_actions";
import Business from "./business";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
  const defaultBusiness = {
    num_reviews: 0,
    SplashCategories: 0,
    id: -1,
    name: "",
    neighborhood: "",
    street_address: "",
    city: "",
    state: "",
    zip: "",
    latitude: 0,
    longitude: 0,
    phone: "",
    website: "",
    price: "",
    business_hours: [],
    image_ids: [],
  };

  return {
    business:
      state.entities.businesses[ownProps.match.params.id] || defaultBusiness,
    images: state.entities.images,
    reviews: state.entities.reviews,
  };
};

const mDTP = (dispatch) => ({
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mSTP, mDTP)(Business));

import { connect } from "react-redux";
import { fetchBusinesses } from "../../util/business_api_util";
import Search from "./search";

const mSTP = (state) => {
  return {
    businesses: state.entities.businesses,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchBusinesses: (searchValues) => dispatch(fetchBusinesses(searchValues)),
  };
};

export default connect(mSTP, mDTP)(Search);

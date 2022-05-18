import { connect } from "react-redux";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchNav from "./search_nav";
import { fetchBusinesses } from "../../util/business_api_util";

const mSTP = (state) => ({
  formType: "search",
  user: state.entities.users[state.session.id],
  businesses: state.entities.businesses,
  term: state.term,

  location: state.location,
});

const mDTP = (dispatch) => {
  return {
    fetchBusinesses: (searchValues) => dispatch(fetchBusinesses(searchValues)),
  };
};
export default withRouter(connect(mSTP, mDTP)(SearchNav));

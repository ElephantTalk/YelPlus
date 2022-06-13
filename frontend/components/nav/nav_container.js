import React from "react";
import { connect } from "react-redux";
import Nav from "./nav";
import { fetchBusinesses } from "../../util/business_api_util";
const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  // restaurants: state.entities.restaurants
});

const mDTP = (dispatch) => {
  // debugger
  return {
    fetchBusinesses: (searchValues) => dispatch(fetchBusinesses(searchValues)),
  };
};

export default connect(mSTP, mDTP)(Nav);

import React from "react";
import { connect } from "react-redux";
import SearchIndex from "./search_index";
import {
  logoutCurrentUser,
  receiveCurrentUser,
} from "../../actions/session_actions";
import { fetchBusinesses } from "../../actions/business_actions";
const mSTP = (state, ownProps) => ({
  formType: "search",
  user: state.entities.users[state.session.id],
  businesses: state.entities.businesses,
});

const mDTP = (dispatch) => ({
  logoutCurrentUser: () => dispatch(logoutCurrentUser()),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
  fetchBusinesses: (searchValues) => dispatch(fetchBusinesses(searchValues)),
});

export default connect(mSTP, mDTP)(SearchIndex);

import React from "react";
import { connect } from "react-redux";
import Splash from "./splash";
import {
  logoutCurrentUser,
  receiveCurrentUser,
} from "../../actions/session_actions";

const mSTP = (state, ownProps) => ({
  formType: "splash",
  user: state.entities.users[state.session.id],
  businesses: state.entities.businesses,
});

const mDTP = (dispatch) => ({
  logoutCurrentUser: () => dispatch(logoutCurrentUser()),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
});

export default connect(mSTP, mDTP)(Splash);

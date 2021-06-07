import { connect } from "react-redux";
import React from "react";
import SessionForm from "./session_form";
import {
  resetSessionErrors,
  signup,
  login,
} from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign Up",
    navLink: <Link to="/login">Log in instead</Link>,
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoLogin: (user) => dispatch(login(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);

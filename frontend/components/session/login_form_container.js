import { connect } from "react-redux";
import React from "react";
import SessionForm from "./session_form";
import { login, resetSessionErrors } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Log in",
    navLink: <Link to="/signup">Sign up instead</Link>,
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoLogin: (user) => dispatch(login(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);

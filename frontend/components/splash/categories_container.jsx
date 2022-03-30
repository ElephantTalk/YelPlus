import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import SplashCategories from "./splash_categories";

const mSTP = (state, ownProps) => ({});

const mDTP = (dispatch) => ({});

export default withRouter(connect(mSTP, mDTP)(SplashCategories));

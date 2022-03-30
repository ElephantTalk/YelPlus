import { connect } from "react-redux";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchNav from "./search_nav";
import { fetchBusinesses } from "../../actions/business_actions";

const mSTP = (state, ownProps) => ({});

const mDTP = dispatch => {
    return {
        fetchBusinesses: (searchValues) => dispatch(fetchBusinesses(searchValues))
    };
};
export default withRouter(connect(mSTP, mDTP)(SearchNav));

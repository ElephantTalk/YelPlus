import { connect } from "react-redux";
import search from "./search";
const mSTP = (state) => ({
  restaurants: state.entities.restaurants,
});

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(search);

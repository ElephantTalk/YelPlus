import {
  RECEIVE_BUSINESS,
  RECEIVE_BUSINESSES,
} from "../actions/business_actions";

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      const newBusiness = { [action.business.id]: action.business };
      return Object.assign({}, state, newBusiness);
    case RECEIVE_BUSINESSES:
      return Object.assign({}, action.businesses);
    default:
      return state;
  }
};

export default businessesReducer;

// const initialState = {
//   businesses: [],
//   loading: false,
// };

// const businessesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOADING_BUSINESSES":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "FETCH_BUSINESSES":
//       return {
//         ...state,
//         businesses: action.businesses,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export default businessesReducer;

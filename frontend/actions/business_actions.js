import axios from "axios";
import * as ApiBizUtil from "../util/business_api_util";

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business,
});

const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const fetchBusiness = (id) => (dispatch) =>
  ApiBizUtil.fetchBusiness(id).then((business) =>
    dispatch(receiveBusiness(business))
  );

// export const fetchBusinesses = searchValues => dispatch => (
//   ApiBizUtil.fetchBusinesses(searchValues)
//     .then(businesses => dispatch(receiveBusinesses(businesses)))
// );
export const fetchBusinesses = (searchValues) => async (dispatch) => {
  console.log(searchValues);
  try {
    const res = await axios.post(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchValues.term}&location=${searchValues.location}`,
      {
        headers: {
          authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );
    console.log(searchValue);
    dispatch(RECEIVE_BUSINESSES(data));
  } catch (err) {
    console.log(err);
  }
};

// export const fetchBusinesses = (term, loocation) => async (dispatch) => {
//   try {
//     const res = axios
//     .post(
//       `https://api.yelp.com/v3/businesses/search?term=${params.term}&location=${params.location}`,
//       {
//         headers: {
//           authorization: `Bearer ${process.env.YELP_API_KEY}`,
//         },
//         params: {
//           term: term,
//           location: location,
//         },
//       }
//     );
//     console.log(searchValue);
//     dispatch(RECEIVE_BUSINESSES(data));
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const fetchBusinesses = (searchValues) => {
//   ApiBizUtil.fetchBusinesses(searchValues)
//     .then(businesses => dispatch(receiveBusinesses(businesses)))
//   return (dispatch) => {
//     dispatch({ type: 'RECEIVE_BUSINESSES' });
//     axios
//       .post('http://localhost:3000/search', {
//         term: searchValues.term,
//         location: searchValues.location
//       })
//       .then((res) => {
//         dispatch(RECEIVE_BUSINESSES(data));
//       });
//   };
// };

// export const fetchBusinesses = (searchValues) => {
//   fetchBusinesses(searchValues).then((businesses) =>
//     dispatch(receiveBusinesses(businesses))
//   );
//   return (dispatch) => {
//     dispatch({ type: "RECEIVE_BUSINESSES" });
//     axios.post("http://localhost:3000/search", {
//       term: searchValues.term,
//       location: searchValues.location,
//     });
//   };
// };

// export const fetchBusinesses = (searchValues) => {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_RESTAURANTS' });
//     axios
//       .post('http://localhost:3000/search', {
//         term: searchValues.term,
//         location: searchValues.location
//       })
//       .then((res) => {
//         dispatch({
//           type: 'FETCH_RESTAURANTS',
//           restaurants: res.data.businesses
//         });
//       });
//   };
// };

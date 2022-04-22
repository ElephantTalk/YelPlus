"use strict";
import "regenerator-runtime/runtime";
import axios from "axios";

const yelp = require("yelp-fusion");
const client = yelp.client(`${process.env.YELP_API_KEY}`);

export const fetchBusiness = (id) =>
  $.ajax({
    method: "GET",
    url: `api/businesses/${id}`,
  });

// export const fetchBusinesses = (searchValues) => {
//   const corsApiUrl = "https://cor-test11.herokuapp.com/";
//   $.ajax({
//     method: "GET",
//     url: `${corsApiUrl}https://api.yelp.com/v3/businesses/search?term=${searchValues.term}&location=${searchValues.location}`,
//   });
// };

// export const fetchBusinesses = (term, location) => async (dispatch) => {
//   try {
//     const res = await axios.get(`https://api.yelp.com/v3/businesses/search`, {
//       headers: {
//         authorization: `Bearer ${process.env.YELP_API_KEY}`,
//       },
//       withCredentials: false,
//       params: {
//         term,
//         location,
//       },
//     });
//     dispatch(fetchBusinesses(res.data));
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const fetchBusinesses = async (searchValues) => {
//   client
//     .search({
//       term: searchValues.term,
//       location: searchValues.location,
//     })
//     .then((response) => {
//       console.log(response.jsonBody.name);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };

// export const fetchBusinesses = (searchValues) => {
//   const corsApiUrl = "https://cors-anywhere.herokuapp.com/";
//   return (dispatch) => {
//     dispatch({ type: "RECEIVE_BUSINESSES" });
//     axios
//       .get(
//         `${corsApiUrl}https://api.yelp.com/v3/businesses/search?term=${searchValues.term}&location=${searchValues.location}`,
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.YELP_API_KEY}`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response);
//       });
//   };
// };

// export const fetchBusinesses = () => {
//   const corsApiUrl = "https://cors-anywhere.herokuapp.com/";
//   return (dispatch) => {
//     dispatch({ type: 'RECEIVE_BUSINESSES' });
//     axios.get.get(
//       `${corsApiUrl}https://api.yelp.com/v3/businesses/search?term=${searchValues.term}&location=${searchValues.location}`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.YELP_API_KEY}`,
//         },
//       }
//     ).then((res) => {
//       dispatch({
//         type: 'FETCH_HOT_AND_NEW_RESTAURANTS',
//         restaurants: res.data.businesses
//       });
//     });
//   };
// };

export const fetchBusinesses = (searchValues) => {
  // debugger
  return (dispatch) => {
    axios
      .get("http://localhost:3000/#/search", {
        term: searchValues.term,
        location: searchValues.location,
      })
      .then((res) => {
        dispatch({
          type: "RECEIVE_BUSINESSES",
          businesses: res.data.businesses,
        });
      });
  };
};

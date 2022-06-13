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

// export const fetchBusinesses = (searchValues) => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       `https://cor-test11.herokuapp.com/https://api.yelp.com/v3/businesses/search`,
//       {
//         headers: {
//           authorization:
//             "Bearer xiVvg73izUMSGp4GPwq5thwEmeqsJ0x07clzLPVXKqmEx0htroF0BkNzHWI2JLhbOASZNRWKeQDhQalDgnkL_rB2b6uKrY07LWcx_VHjHoTUHLOHnaKqclIpa0ceYnYx",
//         },
//         withCredentials: false,
//         params: {
//           term: searchValues.term,
//           location: searchValues.location,
//         },
//       }
//     );
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

export const fetchBusinesses = (searchValues) => {
  const corsApiUrl = "https://cor-test11.herokuapp.com/";
  return (dispatch) => {
    dispatch({ type: "RECEIVE_BUSINESSES" });
    axios
      .get(
        `${corsApiUrl}https://api.yelp.com/v3/businesses/search?term=${searchValues.term}&location=${searchValues.location}`,
        {
          headers: {
            Authorization:
              "Bearer xiVvg73izUMSGp4GPwq5thwEmeqsJ0x07clzLPVXKqmEx0htroF0BkNzHWI2JLhbOASZNRWKeQDhQalDgnkL_rB2b6uKrY07LWcx_VHjHoTUHLOHnaKqclIpa0ceYnYx",
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };
};

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

// export const fetchBusinesses = (searchValues) => {
//   return (dispatch) => {
//     axios
//       .get("http://localhost:3000/#/search", {
//         term: searchValues.term,
//         location: searchValues.location,
//       })
//       .then((res) => {
//         console.log(searchValues);
//         dispatch({
//           type: "RECEIVE_BUSINESSES",
//           businesses: res.data.businesses,
//         });
//       });
//   };
// };

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

// export const fetchBusinesses = (searchValues) => {
//   return (dispatch) => {
//     dispatch({ type: "LOADING_BUSINESSES" });
//     axios
//       .get("http://localhost:3000/search", {
//         term: searchValues.term,
//         location: searchValues.location,
//       })
//       .then((res) => {
//         dispatch({
//           type: "RECEIVE_BUSINESSES",
//           businesses: res.data.businesses,
//         });
//       });
//   };
// };

// export const fetchBusinesses = (searchValues) => (dispatch) =>
//   ApiBizUtil.fetchBusinesses(searchValues).then((businesses) =>
//     dispatch(receiveBusinesses(businesses), console.log(searchValues))
//   );

export const fetchBusinesses = (searchValues) => {
  return (dispatch) => {
    return ApiBizUtil.fetchBusinesses(searchValues).then((businesses) => {
      return dispatch(receiveBusinesses(businesses));
    });
  };
};

// export const fetchBusinesses = (searchValues) => async (dispatch) => {
//   console.log(searchValues);
//   try {
//     const res = await axios
//       .get(
//         `https://cor-test11.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchValues.term}&location=${searchValues.location}`,
//         {
//           headers: {
//             Authorization:
//               "Bearer xiVvg73izUMSGp4GPwq5thwEmeqsJ0x07clzLPVXKqmEx0htroF0BkNzHWI2JLhbOASZNRWKeQDhQalDgnkL_rB2b6uKrY07LWcx_VHjHoTUHLOHnaKqclIpa0ceYnYx",
//             // origin: "X-Requested-With",
//             "x-requested-with": "*",
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res.businesses);
//       });
//     // .then((res) =>
//     //   dispatch({
//     //     type: "RECEIVE_BUSINESSES",
//     //   })
//     //   console.log(res.businesses)
//     // );
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const fetchBusinesses = (term, location) => async (dispatch) => {
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
//   const corsApiUrl = "https://cor-test11.herokuapp.com/";
//   $.ajax({
//     type: "get",
//     crossDomain: true,
//     processData: false,
//     data: JSON.stringify(searchValues),
//     contentType: "application/json",
//     headers: {
//       authorization: `Bearer ${process.env.YELP_API_KEY}`,
//       "Access-Control-Allow-Origin": "*",
//       "x-requested-with": "*",
//     },
//     url: `${corsApiUrl}https://api.yelp.com/v3/businesses/search?term=${searchValues.term}&location=${searchValues.location}`,
//   });
//   console.log(searchValues);
// };

// export const fetchBusinesses = (searchValues) => {
//   const corsApiUrl = "https://cor-test11.herokuapp.com/";
//   $.ajax({
//     url: `${corsApiUrl}https://api.yelp.com/v3/businesses/search`,
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       "x-requested-with": "xmlhttprequest",
//       crossDomain: true,
//       processData: false,
//       "Access-Control-Allow-Origin": "*",
//       Authorization:
//         "Bearer xiVvg73izUMSGp4GPwq5thwEmeqsJ0x07clzLPVXKqmEx0htroF0BkNzHWI2JLhbOASZNRWKeQDhQalDgnkL_rB2b6uKrY07LWcx_VHjHoTUHLOHnaKqclIpa0ceYnYx",
//     },
//     data: {
//       term: searchValues.term,
//       location: searchValues.location,
//     },
//   }).then(function (res) {
//     console.log(res)
//     let results = res.businesses;
//     console.log(results);
//   });
// };

// export const fetchBusinesses = (searchValues) => {
//   return fetch(
//     `https://cor-test11.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchValues.term}&location=${searchValues.location}`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         "x-requested-with": "xmlhttprequest",
//         "Access-Control-Allow-Origin": "*",
//         authorization: `Bearer ${process.env.YELP_API_KEY}`,
//       },
//     }
//   );
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

// export const fetchBusinesses = (searchValues) => {
//   const corsApiUrl = "https://cor-test11.herokuapp.com/";
//   return (dispatch) => {
//     dispatch({ type: "LOADING_Businesses" });
//     axios
//       .get(
//         `${corsApiUrl}https://api.yelp.com/v3/businesses/search?term=${searchValues.term}&location=${searchValues.location}`,
//         {
//           headers: {
//             Authorization:
//               "Bearer xiVvg73izUMSGp4GPwq5thwEmeqsJ0x07clzLPVXKqmEx0htroF0BkNzHWI2JLhbOASZNRWKeQDhQalDgnkL_rB2b6uKrY07LWcx_VHjHoTUHLOHnaKqclIpa0ceYnYx",
//           },
//         }
//       )
//       .then((res) =>
//         dispatch(
//           { type: "ADD_Businesses", Businesses: res.data.businesses },
//           console.log(res.data)
//         )
//       )
//       .catch((error) => console.log(error.response));
//   };
// };

import * as ApiUtil from "../util/business_api_util";

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const receiveBusiness = (business) => {
  return {
    type: RECEIVE_BUSINESS,
    business,
  };
};

export const fetchBusinesses = () => (dispatch) =>
  ApiUtil.fetchBusinesses().then((businesses) =>
    dispatch(receiveBusinesses(businesses))
  );

export const fetchBusiness = (id) => (dispatch) =>
  ApiUtil.fetchBusiness(id).then((business) =>
    dispatch(receiveBusiness(business))
  );

export const searchBusinesses = (search) => (dispatch) =>
  ApiUtil.searchBusinesses(search).then((businesses) =>
    dispatch(receiveBusinesses(businesses))
  );

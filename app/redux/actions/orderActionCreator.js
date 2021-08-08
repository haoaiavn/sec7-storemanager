import {
  FETCH_ORDER_DETAIL_FAILURE,
  FETCH_ORDER_DETAIL_REQUEST,
  FETCH_ORDER_DETAIL_SUCCESS,
  FETCH_ORDER_LIST_FAILURE,
  FETCH_ORDER_LIST_REQUEST,
  FETCH_ORDER_LIST_SUCCESS,
  REFRESH_ORDER_LIST_FAILURE,
  REFRESH_ORDER_LIST_REQUEST,
  REFRESH_ORDER_LIST_SUCCESS,
} from './constants';
export const createFetchOrderListRequestAction = () => {
  return { type: FETCH_ORDER_LIST_REQUEST };
};
export const createFetchOrderListSuccessAction = (data) => {
  return { type: FETCH_ORDER_LIST_SUCCESS, data };
};
export const createFetchOrderListFailureAction = (error) => {
  return { type: FETCH_ORDER_LIST_FAILURE, error };
};

export const createRefreshOrderListRequestAction = () => {
  return { type: REFRESH_ORDER_LIST_REQUEST };
};
export const createRefreshOrderListSuccessAction = (data) => {
  return { type: REFRESH_ORDER_LIST_SUCCESS, data };
};
export const createRefreshOrderListFailureAction = (error) => {
  return { type: REFRESH_ORDER_LIST_FAILURE, error };
};

export const createFetchOrderDetailRequestAction = () => {
  return { type: FETCH_ORDER_DETAIL_REQUEST };
};
export const createFetchOrderDetailSuccessAction = (data) => {
  return { type: FETCH_ORDER_DETAIL_SUCCESS, data };
};
export const createFetchOrderDetailFailureAction = (error) => {
  return { type: FETCH_ORDER_DETAIL_FAILURE, error };
};

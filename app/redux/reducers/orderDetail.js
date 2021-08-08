import {
  FETCH_ORDER_DETAIL_FAILURE,
  FETCH_ORDER_DETAIL_REQUEST,
  FETCH_ORDER_DETAIL_SUCCESS,
} from '../actions/constants';

const initialState = {
  isLoading: true,
  detail: {},
  error: '',
};
function orderDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDER_DETAIL_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detail: action.data,
      };
    case FETCH_ORDER_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default orderDetailReducer;

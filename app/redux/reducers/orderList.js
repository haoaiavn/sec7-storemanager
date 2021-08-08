import {
  FETCH_ORDER_LIST_FAILURE,
  FETCH_ORDER_LIST_REQUEST,
  FETCH_ORDER_LIST_SUCCESS,
  REFRESH_ORDER_LIST_FAILURE,
  REFRESH_ORDER_LIST_REQUEST,
  REFRESH_ORDER_LIST_SUCCESS,
} from '../actions/constants';

const initialState = {
  isLoading: false,
  isLoadMore: false,
  nextPage: 1,
  list: [],
  refreshing: false,
  error: '',
};
function orderListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDER_LIST_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_ORDER_LIST_SUCCESS:
      return {
        isLoading: false,
        nextPage: state.nextPage + 1,
        list: [...state.list, ...action.data],
      };
    case FETCH_ORDER_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case REFRESH_ORDER_LIST_REQUEST:
      return {
        ...state,
        refreshing: true,
      };
    case REFRESH_ORDER_LIST_SUCCESS:
      return {
        ...state,
        nextPage: 2,
        refreshing: false,
        list: [...action.data],
      };

    case REFRESH_ORDER_LIST_FAILURE:
      return {
        ...state,
        refreshing: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default orderListReducer;

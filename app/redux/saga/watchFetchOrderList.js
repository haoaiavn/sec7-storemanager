import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createFetchOrderListFailureAction,
  createFetchOrderListRequestAction,
  createFetchOrderListSuccessAction,
} from '../actions/orderActionCreator';

import { FETCH_ORDER_LIST } from '../actions/constants';
import { fetchOrderFromAPI } from '../../api';

function* fetchOrderList(action) {
  try {
    yield put(createFetchOrderListRequestAction());
    const { data, error } = yield call(
      fetchOrderFromAPI,
      `/orders?page=${action.nextPage}&limit=10`
    );
    if (data) {
      yield put(createFetchOrderListSuccessAction(data));
    } else {
      yield put(createFetchOrderListFailureAction(error));
    }
  } catch (error) {
    yield put(createFetchOrderListFailureAction(error));
  }
}

export function* watchFetchOrderList() {
  yield takeLatest(FETCH_ORDER_LIST, fetchOrderList);
}

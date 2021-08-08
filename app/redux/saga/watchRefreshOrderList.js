import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createRefreshOrderListFailureAction,
  createRefreshOrderListRequestAction,
  createRefreshOrderListSuccessAction,
} from '../actions/orderActionCreator';

import { REFRESH_ORDER_LIST } from '../actions/constants';
import { fetchOrderFromAPI } from '../../api';

function* refreshOrderList() {
  try {
    yield put(createRefreshOrderListRequestAction());
    const { data, error } = yield call(
      fetchOrderFromAPI,
      `/orders?page=1&limit=10`
    );
    if (data) {
      yield put(createRefreshOrderListSuccessAction(data));
    } else {
      yield put(createRefreshOrderListFailureAction(error));
    }
  } catch (error) {
    yield put(createRefreshOrderListFailureAction(error));
  }
}

export function* watchRefreshOrderList() {
  yield takeLatest(REFRESH_ORDER_LIST, refreshOrderList);
}

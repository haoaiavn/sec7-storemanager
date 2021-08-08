import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createFetchOrderDetailFailureAction,
  createFetchOrderDetailRequestAction,
  createFetchOrderDetailSuccessAction,
} from '../actions/orderActionCreator';

import { FETCH_ORDER_DETAIL } from '../actions/constants';
import { fetchOrderFromAPI } from '../../api';

function* fetchOrderDetail(action) {
  try {
    yield put(createFetchOrderDetailRequestAction());
    const { data, error } = yield call(
      fetchOrderFromAPI,
      `/orders/${action.id}`
    );
    if (data) {
      yield put(createFetchOrderDetailSuccessAction(data));
    } else {
      yield put(createFetchOrderDetailFailureAction(error));
    }
  } catch (error) {
    yield put(createFetchOrderDetailFailureAction(error));
  }
}

export function* watchFetchOrderDetail() {
  yield takeLatest(FETCH_ORDER_DETAIL, fetchOrderDetail);
}

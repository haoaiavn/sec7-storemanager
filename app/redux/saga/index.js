import { all } from 'redux-saga/effects';
import { watchFetchOrderDetail } from './watchFetchOrderDetail';
import { watchFetchOrderList } from './watchFetchOrderList';
import { watchRefreshOrderList } from './watchRefreshOrderList';

export default function* rootSaga() {
  yield all([
    watchFetchOrderList(),
    watchRefreshOrderList(),
    watchFetchOrderDetail(),
  ]);
}

import { takeLatest } from 'redux-saga/effects';

export function* watchLogin() {
  yield takeLatest('LOGIN', () => console.log('watch Login!'));
}

export function* watchRegister() {
  yield takeLatest('REGISTER', () => console.log('watch Register!'));
}

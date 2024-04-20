// src/sagas.js
import { all } from 'redux-saga/effects';
import { watchSignup } from './SignUpSaga';
import { watchLogin } from './LoginSaga';

export default function* rootSaga() {
  yield all([
    watchSignup(),
    watchLogin()
    // Add more sagas here if needed
  ]);
}

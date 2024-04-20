import { takeLatest, call, put } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../reducers/authSlice'; // Assuming you have a LoginSlice with appropriate action creators
import { loginAPI } from '../../network/LoginAPI'; // Assuming you have a loginAPI function to make the login request

function* handleLogin(action) {
  try {
    // Call the loginAPI function with the payload (e.g., username and password)
    const user = yield call(loginAPI, action.payload);
    // Dispatch the loginSuccess action with the user data
    yield put(loginSuccess(user));
  } catch (error) {
    // Dispatch the loginFailure action with the error message
    yield put(loginFailure(error.message));
  }
}

// Watcher saga to listen for login requests
export function* watchLogin() {
  // Take the latest login request action and call handleLogin saga
  yield takeLatest('auth/loginRequest', handleLogin);
}

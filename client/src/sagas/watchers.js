import { takeLatest } from 'redux-saga/effects'
import { registerSaga } from './authSaga';

import * as types from '../actions/authTypes'

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_REQUEST, registerSaga);
}

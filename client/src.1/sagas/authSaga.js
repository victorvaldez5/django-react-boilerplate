import { put, call } from 'redux-saga/effects'
import { registerUserService } from '../services/authService'

import * as types from '../actions/authTypes'

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload)
    yield [
      put({ type: types.REGISTER_SUCCESS, 
        response 
      })
    ]
  } catch(error) {
    yield put({
      type: types.REGISTER_ERROR,
      error
    })
  }
}


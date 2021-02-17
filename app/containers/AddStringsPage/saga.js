/**
 * Adds a new string to the string array in the API
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ADD_STRING } from 'containers/App/constants';
import request from 'utils/request';
import { stringAdded, stringAddedError } from '../App/actions';
import { makeSelectStringData } from './selectors';

const REQUEST_URL = process.env.REQUEST_URL || `http://localhost:3000/api`;

/**
 * API request/response handler
 */
export function* addNewString() {
  const string = yield select(makeSelectStringData());
  const args = [
    REQUEST_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ string }),
    },
  ];
  try {
    // Call request helper (see 'utils/request')
    const result = yield call(request, ...args);
    yield put(stringAdded(result.strings));
  } catch (err) {
    yield put(stringAddedError(err));
  }
}

/**
 * Watches for ADD_STRING actions and calls addNewString when one comes in.
 */
export default function* addStringData() {
  yield takeLatest(ADD_STRING, addNewString);
}

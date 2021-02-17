/**
 * Gets the array of strings from the API
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringsLoadingError } from 'containers/App/actions';
import request from 'utils/request';

const REQUEST_URL = process.env.REQUEST_URL || `http://localhost:3000/api`;

/**
 * API request/response handler
 */
export function* getStrings() {
  try {
    // Call request helper (see 'utils/request')
    const result = yield call(request, REQUEST_URL);
    yield put(stringsLoaded(result.strings));
  } catch (err) {
    yield put(stringsLoadingError(err));
  }
}

/**
 * Watches for LOAD_STRINGS actions and calls getStrings when one comes in.
 */
export default function* stringsData() {
  yield takeLatest(LOAD_STRINGS, getStrings);
}

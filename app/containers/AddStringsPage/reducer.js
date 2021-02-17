/*
 * AddStringsPage Reducer
 *
 * handles changes in the add string page form
 */

import produce from 'immer';
import { CHANGE_STRING_DATA } from './constants';

// The initial state of the add strings page form
export const initialState = {
  string: '',
};

/* eslint-disable default-case, no-param-reassign */
const changeStringReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING_DATA:
        draft.string = action.string;
        break;
    }
  });

export default changeStringReducer;

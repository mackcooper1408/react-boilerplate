/**
 * Add Strings selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAdd = state => state.add || initialState;

const makeSelectStringData = () =>
  createSelector(
    selectAdd,
    addState => addState.string,
  );

export { selectAdd, makeSelectStringData };

/*
 * Add Strings Page actions
 */

import { CHANGE_STRING_DATA } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} stringData The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_STRING_DATA
 */
export function changeStringData(string) {
  return {
    type: CHANGE_STRING_DATA,
    string,
  };
}

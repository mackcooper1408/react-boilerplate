/*
 * App Actions
 */

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
} from './constants';

/**
 * Load the strings, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_STRINGS
 */
export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

/**
 * Dispatched when the strings are loaded by the request saga
 *
 * @param  {array} strings The strings data
 *
 * @return {object}      An action object with a type of LOAD_STRINGS_SUCCESS passing the strings
 */
export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

/**
 * Dispatched when loading the strings fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_STRINGS_ERROR passing the error
 */
export function stringsLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}

/**
 * add a string, this action starts the request saga
 *
 * @return {object} An action object with a type of ADD_STRING
 */
export function addString() {
  return {
    type: ADD_STRING,
  };
}

/**
 * Dispatched when the string is added by the request saga
 *
 * @param  {array} strings The strings data
 *
 * @return {object}      An action object with a type of ADD_STRING_SUCCESS passing the strings
 */
export function stringAdded(stringData) {
  return {
    type: ADD_STRING_SUCCESS,
    stringData,
  };
}

/**
 * Dispatched when adding a string fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_STRING_ERROR passing the error
 */
export function stringAddedError(error) {
  return {
    type: ADD_STRING_ERROR,
    error,
  };
}

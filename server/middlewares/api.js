/**
 * API middleware for getting and adding strings
 */

const express = require('express');
const { v4: uuid } = require('uuid');
const logger = require('../logger');
const router = express.Router();

// process JSON body => req.body
router.use(express.json());

const strings = [
  { id: uuid(), item: 'first string' },
  { id: uuid(), item: 'second string' },
];

// GET array of strings
// return = { strings: [{id, item}...]}
router.get('/', (req, res, next) => {
  try {
    return res.json({ strings });
  } catch (err) {
    return next(err);
  }
});

// POST add a new string to the array
// req.body.string = "some-string"
// return = { strings: [{id, item}...]}
router.post('/', (req, res, next) => {
  try {
    const newString = req.body.string;
    const newId = uuid();
    const newItem = { id: newId, item: newString };
    strings.unshift(newItem);
    return res.json({ strings });
  } catch (err) {
    return next(err);
  }
});

/** 404 handler: matches unmatched routes; raises NotFoundError. */
router.use(function raiseNotFoundError(req, res, next) {
  return next(new Error('Not Found'));
});

/** Error handler: logs stacktrace and returns JSON error message. */
router.use(function handleErrors(err, req, res) {
  const status = err.status || 500;
  const { message } = err;
  if (process.env.NODE_ENV !== 'test') logger.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});

module.exports = router;

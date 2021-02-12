const express = require('express');
const logger = require('../logger');
// const app = express();
const router = express.Router();

// useful error class to throw
// const { NotFoundError } = require('./expressError');

// process JSON body => req.body
router.use(express.json());

// process traditional form data => req.body
router.use(express.urlencoded({ extended: true }));

// router.use((req, res, next) => {
//   console.log('wow');
//   next();
// });

const strings = ['wow', 'yup'];

router.get('/', (req, res, next) => {
  try {
    return res.json({ strings });
  } catch (err) {
    return next(err);
  }
});

router.post('/', (req, res, next) => {
  try {
    const newString = req.body.string;
    strings.unshift(newString);
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

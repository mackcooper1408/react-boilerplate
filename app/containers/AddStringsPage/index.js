/*
 * Add String Page
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { addString } from '../App/actions';
import saga from './saga';
import reducer from './reducer';
import messages from './messages';
import { changeStringData } from './actions';
import { makeSelectStringData } from './selectors';
import { makeSelectError, makeSelectLoading } from '../App/selectors';

const key = 'add';

export function AddStringsPage({
  loading,
  error,
  stringData,
  handleSubmit,
  handleChange,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="new string"
          onChange={handleChange}
          value={stringData}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

AddStringsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  stringData: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  stringData: makeSelectStringData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    handleChange: evt => {
      const { value } = evt.target;
      dispatch(changeStringData(value));
    },
    handleSubmit: evt => {
      evt.preventDefault();
      dispatch(addString());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddStringsPage);

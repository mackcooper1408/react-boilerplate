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
import history from 'utils/history';
import H1 from 'components/H1';
import FormInput from 'components/FormInput';
import { addString } from 'containers/App/actions';
import saga from './saga';
import reducer from './reducer';
import messages from './messages';
import { changeStringData } from './actions';
import { makeSelectStringData } from './selectors';
import { makeSelectError, makeSelectLoading } from '../App/selectors';
import Form from './Form';
import Button from './Button';

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

  if (loading) return <H1>Loading...</H1>;

  if (error) return <H1>{error}</H1>;

  return (
    <div>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="add your string..."
          onChange={handleChange}
          value={stringData}
        />
        <Button type="submit">submit</Button>
      </Form>
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
      dispatch(changeStringData(''));
      history.push('/strings');
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

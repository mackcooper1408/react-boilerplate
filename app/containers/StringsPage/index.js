/*
 * StringsPage
 *
 * Displays a list of strings from the API
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { FormattedMessage } from 'react-intl';
import { loadStrings } from '../App/actions';
import saga from './saga';
import reducer from '../App/reducer';
import messages from './messages';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectStrings,
} from '../App/selectors';

const key = 'strings';

export function StringsPage({ loading, error, strings, onLoad }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!strings) {
      onLoad();
    }
  }, []);

  if (loading) return <h1>LOADING...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <ul>
        {strings && strings.map(({ id, item }) => <li key={id}>{item}</li>)}
      </ul>
    </div>
  );
}

StringsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(loadStrings());
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
)(StringsPage);

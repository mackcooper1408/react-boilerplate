/*
 * StringsPage
 *
 * Displays a list of strings from the API
 *
 */

import React, { memo, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import H1 from 'components/H1';
import List from 'components/List';
import ListItem from 'components/ListItem';
import { useInjectSaga } from 'utils/injectSaga';
import { loadStrings } from 'containers/App/actions';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectStrings,
} from 'containers/App/selectors';
import saga from './saga';
import messages from './messages';

const key = 'strings';

export function StringsPage({ loading, error, strings, onLoad }) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!strings) {
      onLoad();
    }
  }, []);

  if (loading) return <H1>LOADING...</H1>;

  if (error) return <H1>{error}</H1>;

  return (
    <div>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      {strings && <List items={strings} component={ListItem} />}
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

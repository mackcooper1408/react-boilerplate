import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import HomePage from '../index';
import configureStore from '../../../configureStore';
import history from '../../../utils/history';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ConnectedRouter history={history}>
            <HomePage />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});

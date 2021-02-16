import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import AddStringsPage from '../index';

describe('<AddStringsPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <AddStringsPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { StringsPage, mapDispatchToProps } from '../index';

import { loadStrings } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<StringsPage />', () => {
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
          <StringsPage loading={false} error={false} strings={[]} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the strings on mount', () => {
    const mockOnLoad = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringsPage onLoad={mockOnLoad} />
        </IntlProvider>
      </Provider>,
    );
    expect(mockOnLoad).toHaveBeenCalled();
  });

  it('should not call onLoad if store contains strings', () => {
    const strings = [{ id: '1', item: 'test1' }, { id: '2', item: 'test2' }];
    const mockOnLoad = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringsPage onLoad={mockOnLoad} strings={strings} />
        </IntlProvider>
      </Provider>,
    );
    expect(mockOnLoad).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onLoad', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoad).toBeDefined();
      });

      it('should dispatch loadStrings when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onLoad();
        expect(dispatch).toHaveBeenCalledWith(loadStrings());
      });
    });
  });
});

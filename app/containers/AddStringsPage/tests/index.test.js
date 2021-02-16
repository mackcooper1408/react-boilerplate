import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { addString } from '../../App/actions';

import { AddStringsPage, mapDispatchToProps } from '../index';
import { changeStringData } from '../actions';
import configureStore from '../../../configureStore';

describe('<AddStringsPage />', () => {
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
          <AddStringsPage loading={false} error={false} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('handleChange', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleChange).toBeDefined();
      });

      it('should dispatch changeStringData when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const stringData = 'mxstbr';
        result.handleChange({ target: { value: stringData } });
        expect(dispatch).toHaveBeenCalledWith(changeStringData(stringData));
      });
    });

    describe('handleSubmit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleSubmit).toBeDefined();
      });

      it('should dispatch addString when called', () => {
        const preventDefault = jest.fn();
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const evt = { preventDefault };
        result.handleSubmit(evt);
        expect(preventDefault).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(addString());
      });

      // it('should preventDefault if called with event', () => {
      //   const preventDefault = jest.fn();
      //   const result = mapDispatchToProps(() => {});
      //   const evt = { preventDefault };
      //   result.handleSubmit(evt);
      //   expect(preventDefault).toHaveBeenCalledWith();
      // });
    });
  });
});

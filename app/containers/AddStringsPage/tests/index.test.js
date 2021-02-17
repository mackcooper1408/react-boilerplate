import React from 'react';
import { fireEvent, render } from 'react-testing-library';
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

  it('should update string data on typing', () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddStringsPage handleChange={mockOnChange} />
        </IntlProvider>
      </Provider>,
    );
    expect(mockOnChange).toHaveBeenCalledTimes(0);
    const input = getByPlaceholderText(/string/i);
    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.change(input, { target: { value: 'te' } });
    fireEvent.change(input, { target: { value: 'tes' } });
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockOnChange).toHaveBeenCalledTimes(4);
    expect(input.value).toEqual('test');
  });

  it('should submit string', () => {
    const mockOnSubmit = jest.fn();
    const mockOnChange = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddStringsPage
            handleSubmit={mockOnSubmit}
            handleChange={mockOnChange}
            stringData="test"
          />
        </IntlProvider>
      </Provider>,
    );
    const submitBtn = getByText(/submit/i);
    fireEvent.click(submitBtn);
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should not submit string if empty', () => {
    const mockOnSubmit = jest.fn();
    const mockOnChange = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddStringsPage
            handleSubmit={mockOnSubmit}
            handleChange={mockOnChange}
            stringData=""
          />
        </IntlProvider>
      </Provider>,
    );
    const submitBtn = getByText(/submit/i);
    fireEvent.click(submitBtn);
    expect(mockOnSubmit).not.toHaveBeenCalled();
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
        const stringData = 'test-string';
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
    });
  });
});

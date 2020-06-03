import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../component/Loading';
import { Provider } from 'react-redux';
import store from '../store/index';

it('renders when props = true', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Loading isLoading={true} />
    </Provider>,
    div
  );
});

it('does not rebder when props = false', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Loading isLoading={false} />
    </Provider>,
    div
  );
});

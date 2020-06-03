import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import SearchTags from '../component/SeachTags';
import SearchBar from '../component/SearchBar';
import store from '../store/index';
import { render, fireEvent, screen } from './test-utils';

it('input changes when user type in', () => {
  render(<SearchBar />);
  const input = screen.getByLabelText('search or add filter tags area');

  fireEvent.change(input, { target: { value: 'Toronto' } });
  expect(input.value).toBe('Toronto');
});

test('press search to get all default stores in Totonto', () => {
  render(<SearchBar />, <SearchTags />);
  fireEvent.click(screen.getByTestId('search-button'));
  const state = store.getState();
  expect(state.stores.length).toBe(0);
});

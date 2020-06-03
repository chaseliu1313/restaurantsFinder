import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import store from '../store/index';
import { render, fireEvent, screen } from './test-utils';
import { StoreModal } from '../component/Store';

const testStore = {
  id: 63499,
  name: 'Fin Izakaya',
  address: '55 Eglinton Ave. East',
  city: 'Toronto',
  state: 'ON',
  area: 'Toronto / SW Ontario',
  postal_code: 'M4P 1G8',
  country: 'CA',
  phone: '6473473864',
  lat: 43.707061,
  lng: -79.396159,
  price: 2,
  reserve_url: 'http://www.opentable.com/single.aspx?rid=63499',
  mobile_reserve_url: 'http://mobile.opentable.com/opentable/?restId=63499',
  image_url: 'https://www.opentable.com/img/restimages/63499.jpg',
};

const show = true;

test('show Modal', () => {
  render(<StoreModal store={testStore} showModal={true} key={testStore.id} />);
  expect(screen.getByTestId('modal_content').textContent).toBe(
    'ON' + ' ' + 'CA' + ' ' + 'M4P 1G8'
  );
});

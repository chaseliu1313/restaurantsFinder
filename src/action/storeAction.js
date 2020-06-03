import { LOAD_STORE, IS_LOADING, APPLY_FILTER, SORT_STORE } from './types';
import Axios from 'axios';

const API_URL = 'https://opentable.herokuapp.com/api/restaurants?city=';

export const fetchStores = (stores) => {
  return {
    type: LOAD_STORE,
    payload: stores,
  };
};

export const changeLoading = (loading) => {
  return {
    type: IS_LOADING,
    payload: loading,
  };
};

export const applyFilter = (stores, tags) => {
  return {
    type: APPLY_FILTER,
    payload: { tags, stores },
  };
};

export const sortStore = (stores) => {
  return {
    type: SORT_STORE,
    payload: stores,
  };
};

export function fetchingList(city = 'toronto') {
  return async (dispatch) => {
    try {
      dispatch(changeLoading(true));

      let res = await Axios.get(API_URL + city);

      dispatch(changeLoading(false));

      dispatch(fetchStores(res.data.restaurants));
    } catch (err) {
      console.log(err);
    }
  };
}

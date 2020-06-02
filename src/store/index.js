import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';

const initialState = {
  stores: [],
  tags: [],
  newSearch: true,
  isLoading: false,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
export default store;

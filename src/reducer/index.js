import { combineReducers } from 'redux';
import { stores, isLoading } from './loadingReducer';
import { tags, newSearch } from './tagsReducer';

export default combineReducers({ stores, isLoading, tags, newSearch });

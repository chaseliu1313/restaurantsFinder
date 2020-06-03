import { ADD_TAG, DELETE_TAG, CLEAR_TAG, NEW_SEARCH } from './types';
//actions for manipulating tags
export const addTag = (tag) => {
  return {
    type: ADD_TAG,
    payload: tag,
  };
};

export const deleteTag = (tag) => {
  return {
    type: DELETE_TAG,
    payload: tag,
  };
};

export const clearTags = (tags) => {
  return {
    type: CLEAR_TAG,
    payload: tags,
  };
};

export const setSearch = (isNewSearch) => {
  return {
    type: NEW_SEARCH,
    payload: isNewSearch,
  };
};

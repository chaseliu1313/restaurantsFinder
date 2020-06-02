import { ADD_TAG, DELETE_TAG, CLEAR_TAG, NEW_SEARCH } from '../action';

export const newSearch = (state = false, action) => {
  switch (action.type) {
    case NEW_SEARCH:
      const newSearch = action.payload;
      return newSearch;

    default:
      return state;
  }
};

export const tags = (state = [], action) => {
  switch (action.type) {
    case ADD_TAG:
      let newTag = action.payload;
      console.log(newTag);
      return [...state, newTag];
    case DELETE_TAG:
      let tag = action.payload;
      return state.filter((t) => t !== tag);
    case CLEAR_TAG:
      return [];
    default:
      return state;
  }
};

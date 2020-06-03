import { LOAD_STORE, IS_LOADING, APPLY_FILTER, SORT_STORE } from '../action';

export const stores = (state = [], action) => {
  switch (action.type) {
    case LOAD_STORE:
      const stores = action.payload;
      return stores;
    case APPLY_FILTER:
      const tags = action.payload.tags;
      const curStores = action.payload.stores;
      return filterFunction(curStores, tags);
    case SORT_STORE:
      const storesTobeSort = action.payload;
      return sortStoreByPrice(storesTobeSort);
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      const isLoading = action.payload;
      return isLoading;

    default:
      return state;
  }
};

//filter out the stores that match the tags by looping through both arrays
const filterFunction = (stores, tags) => {
  let result = [];
  console.log(stores);
  console.log(tags);

  if (stores && tags) {
    let s = [...stores];

    s.map((store) => {
      let content = Object.values(store);

      loop1: for (let i = 0; i < content.length; i++) {
        for (let j = 1; j < tags.length; j++) {
          if (typeof content[i] === 'string') {
            if (content[i].toLowerCase().includes(tags[j].toLowerCase())) {
              result.push(store);
              break loop1;
            } else {
              continue;
            }
          }
        }
      }
    });
  } else {
    result = [];
  }

  if (result.length === 0 && stores) {
    result = [...stores];
  }

  return result;
};

//sorting function
const sortStoreByPrice = (stores) => {
  const result = [...stores];
  const compare = (a, b) => {
    if (a.price < b.price) {
      return -1;
    } else {
      if (a.price === b.price) {
        return 0;
      }
      return 1;
    }
  };

  return result.sort(compare);
};

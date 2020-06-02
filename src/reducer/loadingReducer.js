import { LOAD_STORE, IS_LOADING, APPLY_FILTER } from '../action';

export const stores = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case LOAD_STORE:
      const stores = action.payload;
      return stores;
    case APPLY_FILTER:
      const tags = action.payload.tags;
      const curStores = action.payload.stores;
      console.log(tags);
      return filterFunction(curStores, tags);
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

const filterFunction = (stores, tags) => {
  let result = new Set([]);
  console.log(stores);
  console.log(tags);
  if (stores && tags) {
    let s = [...stores];
    let t = [...tags];

    s.map((store) => {
      let content = Object.values(store);

      content.forEach((c) => {
        t.forEach((t) => {
          if (typeof c === 'string' && typeof t === 'string') {
            if (c.toLowerCase().includes(t.toLowerCase())) {
              console.log(c.toLowerCase().includes(t.toLowerCase()));
              result.add(store);
            }
          }
        });
      });
    });
  } else {
    result = [...stores];
  }

  console.log(result);
  return [...result];
};

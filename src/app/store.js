import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './content/contentSlice';
import searchbarReducer from './searchbar/searchbarSlice';

const store = configureStore({
  reducer: {
    content: contentReducer,
    searchbar: searchbarReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './content/contentSlice';
import searchbarReducer from './searchbar/searchbarSlice';
import signinReducer from './signin/signinSlice';

const store = configureStore({
  reducer: {
    content: contentReducer,
    searchbar: searchbarReducer,
    signin: signinReducer,
  },
});

export default store;

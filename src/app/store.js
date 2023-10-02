import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './content/contentSlice';
import searchbarReducer from './searchbar/searchbarSlice';
import signinReducer from './signin/signinSlice';
import confirmationReducer from './confirmation/confirmationSlice';

const store = configureStore({
  reducer: {
    content: contentReducer,
    searchbar: searchbarReducer,
    signin: signinReducer,
    confirmation: confirmationReducer,
  },
});

export default store;

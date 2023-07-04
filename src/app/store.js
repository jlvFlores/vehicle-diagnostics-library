import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './content/contentSlice';

const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export default store;

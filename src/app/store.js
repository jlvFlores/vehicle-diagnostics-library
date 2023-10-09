import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './content/contentSlice';
import searchbarReducer from './searchbar/searchbarSlice';
import loginReducer from './login/loginSlice';
import registerReducer from './register/registerSlice';
import confirmationReducer from './confirmation/confirmationSlice';

const store = configureStore({
  reducer: {
    content: contentReducer,
    searchbar: searchbarReducer,
    login: loginReducer,
    register: registerReducer,
    confirmation: confirmationReducer,
  },
});

export default store;

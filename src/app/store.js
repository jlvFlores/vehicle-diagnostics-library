import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/coursesSlice';
import manualsReducer from './manuals/manualsSlice';
import programsReducer from './programs/programsSlice';
import searchbarReducer from './searchbar/searchbarSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    manuals: manualsReducer,
    programs: programsReducer,
    searchbar: searchbarReducer,
  },
});

export default store;

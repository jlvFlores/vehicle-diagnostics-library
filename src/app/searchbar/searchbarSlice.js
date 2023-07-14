import { createSlice } from '@reduxjs/toolkit';

const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState: {
    searchValue: '',
    selectedCategories: ['courses', 'manuals', 'programs'],
  },
  reducers: {
    setSearchValue: (state, action) => ({ ...state, searchValue: action.payload }),
    setSelectedCategories: (state, action) => ({ ...state, selectedCategories: action.payload }),
  },
});

export const { setSearchValue, setSelectedCategories } = searchbarSlice.actions;
export default searchbarSlice.reducer;

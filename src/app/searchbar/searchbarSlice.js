import { createSlice } from '@reduxjs/toolkit';

const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState: {
    searchValue: '',
    currentTab: 'recent',
  },
  reducers: {
    setSearchValue: (state, action) => ({ ...state, searchValue: action.payload }),
    setCurrentTab: (state, action) => ({ ...state, currentTab: action.payload }),
  },
});

export const { setSearchValue, setCurrentTab } = searchbarSlice.actions;
export default searchbarSlice.reducer;

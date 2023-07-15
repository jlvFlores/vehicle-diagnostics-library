import { createSlice } from '@reduxjs/toolkit';

const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState: {
    searchValue: '',
  },
  reducers: {
    setSearchValue: (state, action) => ({ ...state, searchValue: action.payload }),
  },
});

export const { setSearchValue } = searchbarSlice.actions;
export default searchbarSlice.reducer;

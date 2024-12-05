// redux/contentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    myList: [], // Saved list by user
    continueWatching: [], // Shows user is watching
  },
  reducers: {
    addToMyList: (state, action) => {
        state.myList.push(action.payload);
      },
      removeFromMyList: (state, action) => {
        state.myList = state.myList.filter((item) => item.id !== action.payload);
      },
    addToContinueWatching: (state, action) => {
      const existing = state.continueWatching.find((item) => item.id === action.payload.id);
      if (!existing) {
        state.continueWatching.push(action.payload);
      }
    },
  },
});

export const { addToMyList, removeFromMyList, addToContinueWatching } = contentSlice.actions;
export default contentSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  downloadedMovies: [],
};

const downloadSlice = createSlice({
  name: 'downloads',
  initialState,
  reducers: {
    addDownload: (state, action) => {
      state.downloadedMovies.push(action.payload);
    },
  },
});

export const { addDownload } = downloadSlice.actions;
export default downloadSlice.reducer;

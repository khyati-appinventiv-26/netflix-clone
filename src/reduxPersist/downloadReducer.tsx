import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DownloadedMovie {
  id: string;
  title: string;
  
}


interface DownloadState {
  downloadedMovies: DownloadedMovie[];
}

const initialState: DownloadState = {
  downloadedMovies: [],
  
};

const downloadSlice = createSlice({
  name: 'downloads',
  initialState,
  reducers: {
    addDownload: (state, action: PayloadAction<DownloadedMovie>) => {
      state.downloadedMovies.push(action.payload);
    },
  },
});

export const { addDownload } = downloadSlice.actions;
export default downloadSlice.reducer;

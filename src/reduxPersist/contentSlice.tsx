import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the content item (you can extend this with more properties based on your content structure)
interface ContentItem {
  id: string;
  title: string;
  // Add more properties as needed
}

// Define the type for the content state
interface ContentState {
  myList: ContentItem[];
  continueWatching: ContentItem[];
}

const initialState: ContentState = {
  myList: [],
  continueWatching: [],
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addToMyList: (state, action: PayloadAction<ContentItem>) => {
      state.myList.push(action.payload);
    },
    removeFromMyList: (state, action: PayloadAction<string>) => {
      state.myList = state.myList.filter((item) => item.id !== action.payload);
    },
    addToContinueWatching: (state, action: PayloadAction<ContentItem>) => {
      const existing = state.continueWatching.find((item) => item.id === action.payload.id);
      if (!existing) {
        state.continueWatching.push(action.payload);
      }
    },
  },
});

export const { addToMyList, removeFromMyList, addToContinueWatching } = contentSlice.actions;
export default contentSlice.reducer;

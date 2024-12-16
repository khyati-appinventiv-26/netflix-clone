import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TutorialState {
  hasSeenTutorial: boolean;
}

const initialState: TutorialState = {
  hasSeenTutorial: false,
};

const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    completeTutorial: (state) => {
      state.hasSeenTutorial = true;
    },
  },
});

export const { completeTutorial } = tutorialSlice.actions;
export default tutorialSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const tutorialSlice = createSlice({
    name: 'tutorial',
    initialState: { hasSeenTutorial: false },
    reducers: {
        completeTutorial: (state) => {
            state.hasSeenTutorial = true;
        },
    },
});

export const { completeTutorial } = tutorialSlice.actions;
export default tutorialSlice.reducer;

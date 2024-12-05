// redux/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profiles',
  initialState: {
    profiles: [
      { id: '1', name: 'John', },
      { id: '2', name: 'Emma', },
    ],
    select: []
  },
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
    editProfile: (state, action) => {
      const { id, name } = action.payload;
      const profile = state.profiles.find((profile) => profile.id === id);
      if (profile) {
        profile.name = name;
      }
    },
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter((profile) => profile.id !== action.payload);
    },
    selectProfile: (state, action) => {
      // console.log('state.select', state.select?.push(action.payload))
      // state.select?.push(action.payload);
      state.select = [...state.select, action.payload ?? {}]
    }
  },
});

export const { addProfile, editProfile, deleteProfile, selectProfile } = profileSlice.actions;

export default profileSlice.reducer;

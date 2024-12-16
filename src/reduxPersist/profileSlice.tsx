import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Profile {
  id: string;
  name: string;
}


interface ProfileState {
  profiles: Profile[];
  select: Profile[];
}

const initialState: ProfileState = {
  profiles: [
    { id: '1', name: 'John' },
    { id: '2', name: 'Emma' },
  ],
  select: [],
};

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<Profile>) => {
      state.profiles.push(action.payload);
    },
    editProfile: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const { id, name } = action.payload;
      const profile = state.profiles.find((profile) => profile.id === id);
      if (profile) {
        profile.name = name;
      }
    },
    deleteProfile: (state, action: PayloadAction<string>) => {
      state.profiles = state.profiles.filter((profile) => profile.id !== action.payload);
    },
    selectProfile: (state, action: PayloadAction<Profile>) => {
      state.select = [...state.select, action.payload];
    },
  },
});

export const { addProfile, editProfile, deleteProfile, selectProfile } = profileSlice.actions;

export default profileSlice.reducer;

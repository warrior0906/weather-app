import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLocation: null,
  loading: false,
};

export const LocationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.currentLocation = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
  },
});

export const { setLocation } = LocationSlice.actions;

export default LocationSlice.reducer;
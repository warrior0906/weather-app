import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLocation: null,
  city: null,
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
    setCity: (state, action) => {
      state.city = action.payload;
    }
  },
});

export const { setLocation, setCity } = LocationSlice.actions;

export default LocationSlice.reducer;
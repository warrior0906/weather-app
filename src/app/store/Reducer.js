import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLocation: null,
  weatherData: null,
};

export const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.currentLocation = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLocation, setWeatherData } = WeatherSlice.actions;

export default WeatherSlice.reducer;
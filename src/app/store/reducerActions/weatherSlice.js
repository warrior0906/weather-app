import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLocation: null,
  weatherData: null,
  loading: false,
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
    getWeatherFetch: (state) => {
      state.loading = true;
    },
    getWeatherSuccess: (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
    },
    getWeatherFailure: (state, action) => {
      state.loading = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLocation, getWeatherFetch, getWeatherSuccess, getWeatherFailure } = WeatherSlice.actions;

export default WeatherSlice.reducer;
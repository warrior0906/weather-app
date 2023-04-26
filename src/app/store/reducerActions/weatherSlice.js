import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: null,
  cityWeatherData: null,
  loading: false,
};

export const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherFetch: (state) => {
      state.loading = true;
    },
    getWeatherSuccess: (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
    },
    getWeatherFailure: (state) => {
      state.loading = false;
    },
    getCityWeatherFetch: (state) => {
      state.loading = true;
    },
    getCityWeatherSuccess: (state, action) => {
      state.cityWeatherData = action.payload;
      state.loading = false;
    },
    getCityWeatherFailure: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getWeatherFetch, getWeatherSuccess, getWeatherFailure,
  getCityWeatherFetch, getCityWeatherSuccess, getCityWeatherFailure } = WeatherSlice.actions;

export default WeatherSlice.reducer;
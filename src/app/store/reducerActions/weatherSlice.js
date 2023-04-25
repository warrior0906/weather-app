import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: null,
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
    }
  },
});

// Action creators are generated for each case reducer function
export const { getWeatherFetch, getWeatherSuccess, getWeatherFailure } = WeatherSlice.actions;

export default WeatherSlice.reducer;
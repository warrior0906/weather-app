import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forecastData: null,
  loading: false,
  _5daysForecast: null,
  cityForecastData: null,
  forecastCityFound: null,
  _5daysCityForecast: null,
};

export const ForecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    getForecastFetch: (state) => {
      state.loading = true;
    },
    getForecastSuccess: (state, action) => {
      state.forecastData = action.payload;
      const data = action.payload?.list?.filter((e) =>
        new Date().getDate() !== new Date(e?.dt_txt).getDate() && new Date(e?.dt_txt).getHours() === 0
      );
      state._5daysForecast = data;
      state.loading = false;
    },
    getForecastFailure: (state) => {
      state.loading = false;
    },
    getCityForecastFetch: (state) => {
      state.loading = true;
      state.forecastCityFound = null;
    },
    getCityForecastSuccess: (state, action) => {
      state.cityForecastData = action.payload;
      const data = action.payload?.list?.filter((e) =>
        new Date().getDate() !== new Date(e?.dt_txt).getDate() && new Date(e?.dt_txt).getHours() === 0
      );
      state._5daysCityForecast = data;
      state.loading = false;
      state.forecastCityFound = true;
    },
    getCityForecastFailure: (state) => {
      state.loading = false;
      state.forecastCityFound = false;
      state.cityForecastData = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getForecastFetch, getForecastSuccess, getForecastFailure, getCityForecastFetch, getCityForecastSuccess, getCityForecastFailure
} = ForecastSlice.actions;

export default ForecastSlice.reducer;
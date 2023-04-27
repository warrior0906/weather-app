import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forecastData: null,
  loading: false,
  _5daysForecast: null,
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
    }
  },
});

// Action creators are generated for each case reducer function
export const { getForecastFetch, getForecastSuccess, getForecastFailure } = ForecastSlice.actions;

export default ForecastSlice.reducer;
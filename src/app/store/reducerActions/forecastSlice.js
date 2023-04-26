import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forecastData: null,
  loading: false,
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
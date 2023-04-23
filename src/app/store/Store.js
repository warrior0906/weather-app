import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './Reducer';

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'


export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
})

// export default function configureAppStore(preloadedState) {
//   const store = configureStore({
//     reducer: {
//       weather: weatherReducer,
//     },
//     // middleware: (getDefaultMiddleware) =>
//     //   getDefaultMiddleware().concat(loggerMiddleware),
//     preloadedState,
//     // enhancers: [monitorReducersEnhancer],
//   })

//   // if (process.env.NODE_ENV !== 'production' && module.hot) {
//   //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
//   // }

//   return store;
// }
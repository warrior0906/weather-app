import React from 'react'
import './App.css';
import { Dashboard } from './app/screens';

import { store } from './app/store/Store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;

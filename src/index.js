import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'
import {priceReducer, getDataReducer} from './reducers';
import { Provider } from 'react-redux';
const reducers = combineReducers({
  priceReducer,
  getDataReducer
})
const store = createStore(reducers)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

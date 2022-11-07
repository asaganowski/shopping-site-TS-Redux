import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { getProducts } from './features/products/getProducts';
import { getTotals } from './features/cart/cartSlice';


const container = document.getElementById('root')!;
const root = createRoot(container);

store.dispatch(getProducts());
store.dispatch(getTotals())



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

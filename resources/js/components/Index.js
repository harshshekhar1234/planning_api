import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import 'tachyons';


if (document.getElementById('example')) {
    ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('example'));
}

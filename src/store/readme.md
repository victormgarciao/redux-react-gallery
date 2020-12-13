# Store

- We are goin go create our store in this file
- We also are going to connect our store to our reducers
- We will apply sagaMiddleware to our store

## Usage

```
/// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
...
```

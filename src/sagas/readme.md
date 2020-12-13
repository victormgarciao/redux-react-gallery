# Sagas

This is a link of all sagas (This project is short and only has one saga, this wouldn't be need, but for a bigger application, this is need to link all sagas to the store.

## Usage

```
// store.js
import { applyMiddleware, createStore } from 'redux';
import { allReducers } from '../reducers/reducers';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    allReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)
```

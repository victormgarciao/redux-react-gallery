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
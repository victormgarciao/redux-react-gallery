Room for improvement: images.reducer.js and its test, should be in a folder with its own readme. For now, I'll document it all here.

### reducers.js

- They are all the reducers of the application to link them to the store

## usage
```
// store.js
import { applyMiddleware, createStore } from 'redux';
import { allReducers } from '../reducers/reducers'; // <----
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    allReducers, // <----
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)
```

### images.reducer.js

- Here is where we are going to changer the state of the application
- We try to avoid mutation, so we always return a new state
- We listen the messages that sagas' effects send and change the state accordingly
- We try to avoid any logic more than change any state, logic should be in the saga

### images.reducer.test.js

- Room for improvement: There are some tests for some reducers, in a real world, all reducers should be covered
- This is the suite of tests for images reducers

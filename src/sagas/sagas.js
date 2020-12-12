import { all } from 'redux-saga/effects'
import { imageSaga } from "./images.saga";

export function* rootSaga() {
    yield all([
        imageSaga(),
    ])
};

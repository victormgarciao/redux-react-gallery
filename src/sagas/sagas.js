import { all } from 'redux-saga/effects'
import { imageSaga } from "./Images/images.saga";

export function* rootSaga() {
    yield all([
        imageSaga(),
    ])
};

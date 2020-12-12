import { put, takeEvery } from 'redux-saga/effects'
import {
    A_IMAGE_CLICKED,
    A_MORE_IMAGES_CLICKED,
    A_NEXT_IMAGE_CLICKED,
    A_PREVIOUS_IMAGE_CLICKED,
    A_TOGGLE_SINGLE_VIEW_CLICKED,
    A_USER_FETCH_REQUESTED,
} from '../actions/images.actions';
import {
    setImagesList,
    setNextImages,
    addNextImagesToCurrentList,
    toggleSingleView,
    updateCurrentImage,
    updateCurrentImagePosition,
    previousImage,
    nextImage,
} from '../messages/images.messages';
import { IMAGE_LIMIT_PER_LOAD } from '../reducers/images.reducer';
import { giphyFetch } from "../utils/giphy/giphy.utils";

function* loadImages() {
    try {
        const { data: imagesList } = yield giphyFetch.trending({ offset: 0, limit: IMAGE_LIMIT_PER_LOAD});
        const { data: nextImages } = yield giphyFetch.trending({ offset: IMAGE_LIMIT_PER_LOAD, limit: IMAGE_LIMIT_PER_LOAD});
        
        yield put(setImagesList(imagesList));
        yield put(setNextImages(nextImages));
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
};


function* loadMoreImages(action) {
    const { payload: { offset } } = action;
    try {
        const { data: nextImages } = yield giphyFetch.trending({ offset, limit: IMAGE_LIMIT_PER_LOAD});

        yield put(addNextImagesToCurrentList());
        yield put(setNextImages(nextImages));
    } catch (e) {
        yield put({type: "LOAD_MORE_IMAGES_FAILED", message: e.message});
    }
};


function* clickOnImage(action) {
    const { payload: { id } } = action;
    yield put(toggleSingleView());
    yield put(updateCurrentImage(id));
    yield put(updateCurrentImagePosition(id));
};


function* clickOnNext(action) {
    const { payload: { position, isLast, nextOffset } } = action;
    
    if (isLast) {
        try {
            const { data: nextImages } = yield giphyFetch.trending({ offset: nextOffset, limit: IMAGE_LIMIT_PER_LOAD});
    
            yield put(addNextImagesToCurrentList());
            yield put(setNextImages(nextImages));
            yield put(nextImage(position));
        } catch (e) {
            yield put({type: "LOAD_MORE_IMAGES_FAILED", message: e.message});
        }
    } else {
        yield put(nextImage(position));
    }
};


function* clickOnPrevious(action) {
    const { payload: { position } } = action;
    yield put(previousImage(position));
};


function* clickOnToggle() {
    yield put(toggleSingleView())
}


export function* imageSaga() {
    yield takeEvery(A_USER_FETCH_REQUESTED, loadImages);
    yield takeEvery(A_MORE_IMAGES_CLICKED, loadMoreImages);
    yield takeEvery(A_IMAGE_CLICKED, clickOnImage);
    yield takeEvery(A_NEXT_IMAGE_CLICKED, clickOnNext);
    yield takeEvery(A_PREVIOUS_IMAGE_CLICKED, clickOnPrevious);
    yield takeEvery(A_TOGGLE_SINGLE_VIEW_CLICKED, clickOnToggle);
};

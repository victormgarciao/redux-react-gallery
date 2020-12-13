import { put, select, takeEvery } from 'redux-saga/effects'
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
    updateCurrentImagePosition,
    previousImage,
    nextImage,
    updateCurrentImage,
    updateNextOffset,
} from '../messages/images.messages';
import { IMAGE_LIMIT_PER_LOAD } from '../reducers/images.reducer';
import { giphyFetch } from "../utils/giphy/giphy.utils";

const getNextOffset = (state) => state.images.nextOffset;
const getImagesList = (state) => state.images.imagesList;
const getCurrentImagePosition = (state) => state.images.currentImagePosition;

function* loadImages() {
    try {
        const { data: imagesList } = yield giphyFetch.trending({ offset: 0, limit: IMAGE_LIMIT_PER_LOAD});
        const { data: nextImages } = yield giphyFetch.trending({ offset: IMAGE_LIMIT_PER_LOAD, limit: IMAGE_LIMIT_PER_LOAD});
        const nextOffset = yield select(getNextOffset);
        const imagesAlreadyLoaded = IMAGE_LIMIT_PER_LOAD * 2;

        yield put(setImagesList(imagesList));
        yield put(updateNextOffset(nextOffset + imagesAlreadyLoaded));
        yield put(updateCurrentImage(imagesList[0]));
        yield put(setNextImages(nextImages));
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
};


function* loadMoreImages() {
    const nextOffset = yield select(getNextOffset);
    
    try {
        const { data: nextImages } = yield giphyFetch.trending({ offset: nextOffset, limit: IMAGE_LIMIT_PER_LOAD});

        yield put(addNextImagesToCurrentList());
        yield put(setNextImages(nextImages));
        yield put(updateNextOffset(nextOffset + IMAGE_LIMIT_PER_LOAD));
    } catch (e) {
        yield put({type: "LOAD_MORE_IMAGES_FAILED", message: e.message});
    }
};


function* clickOnImage(action) {
    const { payload: { id } } = action;
    const imagesList = yield select(getImagesList);
    const newImageIndex = imagesList.findIndex((image) => image.id === id);
    const newImage = imagesList[newImageIndex];


    yield put(toggleSingleView());
    yield put(updateCurrentImage(newImage));
    yield put(updateCurrentImagePosition(newImageIndex));
};


function* updateNextImage(imagesList, position) {
    const newImage = imagesList[position];
    yield put(updateCurrentImagePosition(position));
    yield put(nextImage(newImage));
}


function* clickOnNext() {
    const imagesList = yield select(getImagesList);
    const currentImagePosition = yield select(getCurrentImagePosition);
    const nextPosition = currentImagePosition + 1;
    const isOutOfBounds = nextPosition === imagesList.length;
    
    if (isOutOfBounds) {
        try {
            yield loadMoreImages();
            const imageListAfterLoad = yield select(getImagesList);
            yield updateNextImage(imageListAfterLoad, nextPosition);
        } catch (e) {
            yield put({type: "LOAD_MORE_IMAGES_FAILED", message: e.message});
        }
    } else {
        yield updateNextImage(imagesList, nextPosition);
    }
};


function* clickOnPrevious() {
    const currentImagePosition = yield select(getCurrentImagePosition);
    const previousPosition = currentImagePosition - 1;
    const isNotOutOfBounds = previousPosition >= 0;
    if (isNotOutOfBounds) {
        yield put(updateCurrentImagePosition(previousPosition));
        const imagesList = yield select(getImagesList);
        const newImage = imagesList[previousPosition];
        yield put(previousImage(newImage))
    };
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

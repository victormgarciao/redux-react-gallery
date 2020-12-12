export const IMAGES_FETCH_SUCCEEDED = 'IMAGES_FETCH_SUCCEEDED';
export const NEXT_IMAGES_FETCH_SUCCEEDED = 'NEXT_IMAGES_FETCH_SUCCEEDED';
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const ADD_NEXT_IMAGES_TO_CURRENT_LIST = 'ADD_NEXT_IMAGES_TO_CURRENT_LIST';
export const MORE_IMAGES_CLICKED = 'MORE_IMAGES_CLICKED';
export const IMAGE_CLICKED = 'IMAGE_CLICKED';
export const TOGGLE_SINGLE_VIEW = 'TOGGLE_SINGLE_VIEW';
export const UPDATE_CURRENT_IMAGE = 'UPDATE_CURRENT_IMAGE';
export const UPDATE_CURRENT_IMAGE_POSITION = 'UPDATE_CURRENT_IMAGE_POSITION';
export const NEXT_IMAGE = 'NEXT_IMAGE';
export const PREVIOUS_IMAGE = 'PREVIOUS_IMAGE';
export const NEXT_IMAGE_CLICKED = 'NEXT_IMAGE_CLICKED';
export const PREVIOUS_IMAGE_CLICKED = 'PREVIOUS_IMAGE_CLICKED';


export function setImagesList(imagesList) {
    return{
        type: IMAGES_FETCH_SUCCEEDED,
        payload: { imagesList }
    }
};


export function setNextImages(nextImages) {
    return{
        type: NEXT_IMAGES_FETCH_SUCCEEDED,
        payload: { nextImages }
    }
};


export function addNextImagesToCurrentList() {
    return{
        type: ADD_NEXT_IMAGES_TO_CURRENT_LIST,
    }
};


export function loadImages() {
    return{
        type: USER_FETCH_REQUESTED,
    }
};


export function getMoreImages(offset) {
    return{
        type: MORE_IMAGES_CLICKED,
        payload: { offset }
    }
};

export function imageClicked(id) {
    return{
        type: IMAGE_CLICKED,
        payload: { id }
    }
};

export function toggleSingleView() {
    return { type: TOGGLE_SINGLE_VIEW }
};


export function updateCurrentImage(id) {
    return {
        type: UPDATE_CURRENT_IMAGE,
        payload: { id }
    }
};

export function updateCurrentImagePosition(id) {
    return {
        type: UPDATE_CURRENT_IMAGE_POSITION,
        payload: { id },
    }
};

export function nextImageClicked({ position, isLast, nextOffset }) {
    return {
        type: NEXT_IMAGE_CLICKED,
        payload: { position, isLast, nextOffset },
    }
}

export function previousImageClicked(position) {
    return {
        type: PREVIOUS_IMAGE_CLICKED,
        payload: { position },
    }
}

export function nextImage(position) {
    return {
        type: NEXT_IMAGE,
        payload: { position },
    }
}

export function previousImage(position) {
    return {
        type: PREVIOUS_IMAGE,
        payload: { position },
    }
}
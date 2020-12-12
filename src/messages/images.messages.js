export const M_IMAGES_FETCH_SUCCEEDED = 'M_IMAGES_FETCH_SUCCEEDED';
export const M_NEXT_IMAGES_FETCH_SUCCEEDED = 'M_NEXT_IMAGES_FETCH_SUCCEEDED';
export const M_ADD_NEXT_IMAGES_TO_CURRENT_LIST = 'M_ADD_NEXT_IMAGES_TO_CURRENT_LIST';
export const M_TOGGLE_SINGLE_VIEW = 'M_TOGGLE_SINGLE_VIEW';
export const M_UPDATE_CURRENT_IMAGE = 'M_UPDATE_CURRENT_IMAGE';
export const M_UPDATE_CURRENT_IMAGE_POSITION = 'M_UPDATE_CURRENT_IMAGE_POSITION';
export const M_NEXT_IMAGE = 'M_NEXT_IMAGE';
export const M_PREVIOUS_IMAGE = 'M_PREVIOUS_IMAGE';

export function setImagesList(imagesList) {
    return {
        type: M_IMAGES_FETCH_SUCCEEDED,
        payload: { imagesList }
    }
};


export function setNextImages(nextImages) {
    return {
        type: M_NEXT_IMAGES_FETCH_SUCCEEDED,
        payload: { nextImages }
    }
};


export function addNextImagesToCurrentList() {
    return {
        type: M_ADD_NEXT_IMAGES_TO_CURRENT_LIST,
    }
};


export function toggleSingleView() {
    return { type: M_TOGGLE_SINGLE_VIEW }
};


export function updateCurrentImage(id) {
    return {
        type: M_UPDATE_CURRENT_IMAGE,
        payload: { id }
    }
};


export function updateCurrentImagePosition(id) {
    return {
        type: M_UPDATE_CURRENT_IMAGE_POSITION,
        payload: { id },
    }
};


export function nextImage(position) {
    return {
        type: M_NEXT_IMAGE,
        payload: { position },
    }
}


export function previousImage(position) {
    return {
        type: M_PREVIOUS_IMAGE,
        payload: { position },
    }
}

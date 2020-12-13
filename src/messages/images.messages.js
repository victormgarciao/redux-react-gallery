export const M_IMAGES_FETCH_SUCCEEDED = 'M_IMAGES_FETCH_SUCCEEDED';
export const M_SET_NEXT_IMAGES = 'M_SET_NEXT_IMAGES';
export const M_ADD_NEXT_IMAGES_TO_CURRENT_LIST = 'M_ADD_NEXT_IMAGES_TO_CURRENT_LIST';
export const M_TOGGLE_SINGLE_VIEW = 'M_TOGGLE_SINGLE_VIEW';
export const M_UPDATE_CURRENT_IMAGE = 'M_UPDATE_CURRENT_IMAGE';
export const M_UPDATE_CURRENT_IMAGE_POSITION = 'M_UPDATE_CURRENT_IMAGE_POSITION';
export const M_NEXT_IMAGE = 'M_NEXT_IMAGE';
export const M_PREVIOUS_IMAGE = 'M_PREVIOUS_IMAGE';
export const M_UPDATE_NEXT_OFFSET = 'M_UPDATE_NEXT_OFFSET';

export function setImagesList(imagesList) {
    return {
        type: M_IMAGES_FETCH_SUCCEEDED,
        payload: { imagesList }
    }
};


export function updateNextOffset(offset) {
    return {
        type: M_UPDATE_NEXT_OFFSET,
        payload: { offset }
    }
};


export function setNextImages(nextImages) {
    return {
        type: M_SET_NEXT_IMAGES,
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


export function updateCurrentImage(image) {
    return {
        type: M_UPDATE_CURRENT_IMAGE,
        payload: { image }
    }
};


export function updateCurrentImagePosition(position) {
    return {
        type: M_UPDATE_CURRENT_IMAGE_POSITION,
        payload: { position },
    }
};


export function nextImage(image) {
    return {
        type: M_NEXT_IMAGE,
        payload: { image },
    }
}


export function previousImage(image) {
    return {
        type: M_PREVIOUS_IMAGE,
        payload: { image },
    }
}

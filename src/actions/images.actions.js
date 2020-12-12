export const A_USER_FETCH_REQUESTED = 'A_USER_FETCH_REQUESTED';
export const A_MORE_IMAGES_CLICKED = 'A_MORE_IMAGES_CLICKED';
export const A_IMAGE_CLICKED = 'A_IMAGE_CLICKED';
export const A_TOGGLE_SINGLE_VIEW_CLICKED = 'A_TOGGLE_SINGLE_VIEW_CLICKED';
export const A_NEXT_IMAGE_CLICKED = 'A_NEXT_IMAGE_CLICKED';
export const A_PREVIOUS_IMAGE_CLICKED = 'A_PREVIOUS_IMAGE_CLICKED';


export function loadImages() {
    return {
        type: A_USER_FETCH_REQUESTED,
    }
};


export function getMoreImages(offset) {
    return {
        type: A_MORE_IMAGES_CLICKED,
        payload: { offset }
    }
};

export function imageClicked(id) {
    return {
        type: A_IMAGE_CLICKED,
        payload: { id }
    }
};


export function toggleSingleViewClicked() {
    return { type: A_TOGGLE_SINGLE_VIEW_CLICKED }
};


export function nextImageClicked({ position, isLast, nextOffset }) {
    return {
        type: A_NEXT_IMAGE_CLICKED,
        payload: { position, isLast, nextOffset },
    }
}

export function previousImageClicked(position) {
    return {
        type: A_PREVIOUS_IMAGE_CLICKED,
        payload: { position },
    }
}

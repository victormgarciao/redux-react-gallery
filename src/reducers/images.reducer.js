import {
    M_IMAGES_FETCH_SUCCEEDED,
    M_NEXT_IMAGES_FETCH_SUCCEEDED,
    M_ADD_NEXT_IMAGES_TO_CURRENT_LIST,
    M_TOGGLE_SINGLE_VIEW,
    M_UPDATE_CURRENT_IMAGE,
    M_UPDATE_CURRENT_IMAGE_POSITION,
    M_NEXT_IMAGE,
    M_PREVIOUS_IMAGE,
} from "../messages/images.messages";

export const IMAGE_LIMIT_PER_LOAD = 15;

export const initialState = {
    imagesList: [],
    nextImages: [],
    nextOffset: 0,
    limit: IMAGE_LIMIT_PER_LOAD,
    gifPromise: null,

    isSingleViewOpen: false,
    currentImagePosition: 0,
    currentImage: {
        title: '',
        images: {
            original: {
                webp: '',
                width: '',
                height: '',
            }
        }
    },
};


export function imageDisplayReducer (state = initialState, action = {}) {
    const {
        type: actionType = {},
        payload,
    } = action;


    switch(actionType) {
        case M_IMAGES_FETCH_SUCCEEDED: {
            const { imagesList } = payload;

            return {
                ...state,
                imagesList,
                nextOffset: state.nextOffset + IMAGE_LIMIT_PER_LOAD,
                currentImage: imagesList[0]
            };
        }


        case M_NEXT_IMAGES_FETCH_SUCCEEDED: {
            const { nextImages } = payload;

            return {
                ...state,
                nextImages,
                nextOffset: state.nextOffset + IMAGE_LIMIT_PER_LOAD,
            };
        }


        case M_ADD_NEXT_IMAGES_TO_CURRENT_LIST: {
            return {
                ...state,
                imagesList: [...state.imagesList, ...state.nextImages]
            };
        }


        case M_TOGGLE_SINGLE_VIEW: {
            return {
                ...state,
                isSingleViewOpen: !state.isSingleViewOpen,
            }
        }


        case M_UPDATE_CURRENT_IMAGE: {
            const { id } = payload;

            return {
                ...state,
                currentImage: state.imagesList.find((image) => image.id === id),
            }
        }


        case M_UPDATE_CURRENT_IMAGE_POSITION: {
            const { id } = payload;

            return {
                ...state,
                currentImagePosition: state.imagesList.findIndex((image) => image.id === id),
            }
        }


        case M_NEXT_IMAGE: {
            const { imagesList } = state;
            const { position } = payload;

            return {
                ...state,
                currentImagePosition: position,
                currentImage: imagesList[position],
            }
        }


        case M_PREVIOUS_IMAGE: {
            const { imagesList } = state;
            const { position } = payload;
            const isOutOfBounds = position < 0;

            return isOutOfBounds
                ? state
                : {
                    ...state,
                    currentImagePosition: position,
                    currentImage: imagesList[position],
                };
        }


        default: {
            return state;
        }
    }
}

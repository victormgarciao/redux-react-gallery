import {
    IMAGES_FETCH_SUCCEEDED,
    NEXT_IMAGES_FETCH_SUCCEEDED,
    ADD_NEXT_IMAGES_TO_CURRENT_LIST,
    TOGGLE_SINGLE_VIEW,
    UPDATE_CURRENT_IMAGE,
    UPDATE_CURRENT_IMAGE_POSITION,
    NEXT_IMAGE,
    PREVIOUS_IMAGE,
} from "../actions/images.actions";

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
        case IMAGES_FETCH_SUCCEEDED: {
            const { imagesList } = payload;

            return {
                ...state,
                imagesList,
                nextOffset: state.nextOffset + IMAGE_LIMIT_PER_LOAD,
                currentImage: imagesList[0]
            };
        }


        case NEXT_IMAGES_FETCH_SUCCEEDED: {
            const { nextImages } = payload;

            return {
                ...state,
                nextImages,
                nextOffset: state.nextOffset + IMAGE_LIMIT_PER_LOAD,
            };
        }


        case ADD_NEXT_IMAGES_TO_CURRENT_LIST: {
            return {
                ...state,
                imagesList: [...state.imagesList, ...state.nextImages]
            };
        }


        case TOGGLE_SINGLE_VIEW: {
            return {
                ...state,
                isSingleViewOpen: !state.isSingleViewOpen,
            }
        }


        case UPDATE_CURRENT_IMAGE: {
            const { id } = payload;

            return {
                ...state,
                currentImage: state.imagesList.find((image) => image.id === id),
            }
        }


        case UPDATE_CURRENT_IMAGE_POSITION: {
            const { id } = payload;

            return {
                ...state,
                currentImagePosition: state.imagesList.findIndex((image) => image.id === id),
            }
        }


        case NEXT_IMAGE: {
            const { imagesList } = state;
            const { position } = payload;

            return {
                ...state,
                currentImagePosition: position,
                currentImage: imagesList[position],
            }
        }


        case PREVIOUS_IMAGE: {
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

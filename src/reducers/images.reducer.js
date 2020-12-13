import {
    M_IMAGES_FETCH_SUCCEEDED,
    M_SET_NEXT_IMAGES,
    M_ADD_NEXT_IMAGES_TO_CURRENT_LIST,
    M_TOGGLE_SINGLE_VIEW,
    M_UPDATE_CURRENT_IMAGE_POSITION,
    M_NEXT_IMAGE,
    M_PREVIOUS_IMAGE,
    M_UPDATE_CURRENT_IMAGE,
    M_UPDATE_NEXT_OFFSET,
} from "../messages/images.messages";

export const IMAGE_LIMIT_PER_LOAD = 15;

export const initialState = {
    imagesList: [],
    nextImages: [],
    nextOffset: 0,
    limit: IMAGE_LIMIT_PER_LOAD,

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


export function imageDisplayReducer (state = initialState, message = {}) {
    const {
        type: messageType = {},
        payload,
    } = message;


    switch(messageType) {
        case M_IMAGES_FETCH_SUCCEEDED: {
            const { imagesList } = payload;

            return {
                ...state,
                imagesList,
            };
        }

        case M_PREVIOUS_IMAGE:
        case M_NEXT_IMAGE:
        case M_UPDATE_CURRENT_IMAGE: {
            const { image } = payload;

            return {
                ...state,
                currentImage: image,
            };
        }


        case M_UPDATE_NEXT_OFFSET: {
            const { offset } = payload;

            return {
                ...state,
                nextOffset: offset,
            };
        }


        case M_SET_NEXT_IMAGES: {
            const { nextImages } = payload;

            return {
                ...state,
                nextImages,
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


        case M_UPDATE_CURRENT_IMAGE_POSITION: {
            const { position } = payload;

            return {
                ...state,
                currentImagePosition: position,
            }
        }


        default: {
            return state;
        }
    }
}

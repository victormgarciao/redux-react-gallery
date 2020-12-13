import {
    setImagesList,
    setNextImages,
    addNextImagesToCurrentList,
    toggleSingleView,
    updateCurrentImage,
    nextImage,
    previousImage,
} from '../messages/images.messages';
import { imageDisplayReducer, initialState } from './images.reducer';

const testState = {
    imagesList: [{id: 'boo'}, {id: 'bar'}],
    nextImages: [{id: 'tupi'}, {id: 'topi'}],
    nextOffset: 0,
    limit: 10,

    isSingleViewOpen: false,
    currentImagePosition: 0,
    currentImage: {
        title: 'fooTitle',
        images: {
            original: {
                webp: 'fooWebp',
                width: 'fooWitdh',
                height: 'fooHeight',
            }
        }
    },
};

describe('imageDisplayReducer', function() {
    test('by default, state is initialState', function(){
        expect(imageDisplayReducer()).toEqual(initialState);
    });


    test('return state with no message', function() {
        expect(imageDisplayReducer(testState)).toEqual(testState);
    });


    test('return expected state aftert setImageList message', function() {
        const testImageList = ['anotherBoo', 'anotherBar'];
        const expectedObject = {
            ...testState,
            imagesList: testImageList,
        };
        const message = setImagesList(testImageList);

        expect(imageDisplayReducer(testState, message))
            .toEqual(expectedObject);
    });


    test('return expected state aftert setNextImages message', function() {
        const testImageList = ['anotherBoo', 'anotherBar'];
        const expectedObject = {
            ...testState,
            nextImages: testImageList,
        };
        const message = setNextImages(testImageList);

        expect(imageDisplayReducer(testState, message))
            .toEqual(expectedObject);
    });


    test('return expected state aftert addNextImagesToCurrentList message', function() {
        const expectedObject = {
            ...testState,
            imagesList: [...testState.imagesList, ...testState.nextImages],
        };
        const message = addNextImagesToCurrentList();

        expect(imageDisplayReducer(testState, message))
            .toEqual(expectedObject);
    });


    test('return expected state aftert toggleSingleView message', function() {
        const expectedObject = {
            ...testState,
            isSingleViewOpen: !testState.isSingleViewOpen,
        };
        const message = toggleSingleView();

        expect(imageDisplayReducer(testState, message))
            .toEqual(expectedObject);
    });


    test('return expected state aftert updateCurrentImage message', function() {
        const expectedObject = {
            ...testState,
            currentImage: {id: 'bar'},
        };
        const message = updateCurrentImage({id: 'bar'});

        expect(imageDisplayReducer(testState, message))
            .toEqual(expectedObject);
    });


    test('return expected state aftert nextImage message', function() {
        const expectedObject = {
            ...testState,
            currentImage: {id: 'bar'},
        };
        const message = nextImage({id: 'bar'});

        expect(imageDisplayReducer(testState, message))
            .toEqual(expectedObject);
    });


    test('return expected state aftert previousImage message', function() {
        const expectedObject = {
            ...testState,
            currentImage: {id: 'bar'},
        };
        const message = previousImage({id: 'bar'});

        expect(imageDisplayReducer(testState, message))
            .toEqual(expectedObject);
    });
});
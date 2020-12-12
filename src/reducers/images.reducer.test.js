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
    gifPromise: null,

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


    test('return state with no action', function() {
        expect(imageDisplayReducer(testState)).toEqual(testState);
    });


    test('return expected state aftert setImageList action', function() {
        const testImageList = ['anotherBoo', 'anotherBar'];
        const expectedObject = {
            ...testState,
            imagesList: testImageList,
            nextOffset: testState.nextOffset + 15,
            currentImage: 'anotherBoo',
        };
        const action = setImagesList(testImageList);

        expect(imageDisplayReducer(testState, action))
            .toEqual(expectedObject);
    });


    test('return expected state aftert setNextImages action', function() {
        const testImageList = ['anotherBoo', 'anotherBar'];
        const expectedObject = {
            ...testState,
            nextImages: testImageList,
            nextOffset: testState.nextOffset + 15,
        };
        const action = setNextImages(testImageList);

        expect(imageDisplayReducer(testState, action))
            .toEqual(expectedObject);
    });


    test('return expected state aftert addNextImagesToCurrentList action', function() {
        const expectedObject = {
            ...testState,
            imagesList: [...testState.imagesList, ...testState.nextImages],
        };
        const action = addNextImagesToCurrentList();

        expect(imageDisplayReducer(testState, action))
            .toEqual(expectedObject);
    });


    test('return expected state aftert toggleSingleView action', function() {
        const expectedObject = {
            ...testState,
            isSingleViewOpen: !testState.isSingleViewOpen,
        };
        const action = toggleSingleView();

        expect(imageDisplayReducer(testState, action))
            .toEqual(expectedObject);
    });


    test('return expected state aftert updateCurrentImage action', function() {
        const expectedObject = {
            ...testState,
            currentImage: {id: 'bar'},
        };
        const action = updateCurrentImage('bar');

        expect(imageDisplayReducer(testState, action))
            .toEqual(expectedObject);
    });


    test('return expected state aftert nextImage action', function() {
        const expectedObject = {
            ...testState,
            currentImagePosition: 1,
            currentImage: {id: 'bar'},
        };
        const action = nextImage(1);

        expect(imageDisplayReducer(testState, action))
            .toEqual(expectedObject);
    });


    test('return expected state aftert previousImage action', function() {
        const expectedObject = {
            ...testState,
            currentImagePosition: 1,
            currentImage: {id: 'bar'},
        };
        const action = previousImage(1);

        expect(imageDisplayReducer(testState, action))
            .toEqual(expectedObject);
    });


    test('state does not change if position is < 0', function() {
        const action = previousImage(-1);

        expect(imageDisplayReducer(testState, action))
            .toEqual(testState);
    });
});
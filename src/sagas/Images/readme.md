# Images Saga

- Probably the most important file of the application.
- We store here all the logic between user interactions (Actions) and effects interactions (Messages)
- We listen to an action from the user, and we apply all logig and send all messages needed to change the state of the aplication accordingly

## Usage
It is used by sagas.js to be applied as a middleware in the store

```
// This is what we export
export function* imageSaga() {
    yield takeEvery(A_USER_FETCH_REQUESTED, loadImages);
    yield takeEvery(A_MORE_IMAGES_CLICKED, loadMoreImages);
    yield takeEvery(A_IMAGE_CLICKED, clickOnImage);
    yield takeEvery(A_NEXT_IMAGE_CLICKED, clickOnNext);
    yield takeEvery(A_PREVIOUS_IMAGE_CLICKED, clickOnPrevious);
    yield takeEvery(A_TOGGLE_SINGLE_VIEW_CLICKED, clickOnToggle);
};
```

- They are the user interactions. This saga is listening to them, and triggering generator functions, which will be our effects
- Those effects are in charge to apply the logic and send messages that are need to our reducers

## Effects
### loadImages

- It fetch two list of imagges from Giphy API, the current list of images and next list of images (as asynchronus load)
- It sets the initial list of images, the asynchronus load, the new offset to calculate from we want to load more images later and the current image (which will be by default, the first one).

### loadMoreImages

- The name is self descriptive but we are going to set the images we loaded asynchronusly before and load for another bunch of them.
- We update both lists, imagesList and nextImages. Also, we update the offset of images

### clickOnImage

- The action gives us the id of the image we want to display
- We select the image, find it on the list and then we toggle to single view, update current image and current image position

### clickOnNext

- We caculate the next position and we check if it's out of bounds or not
- If it's out of bounds we update the list to have the ones we loaded asynchronusly and load for more, then we update the image and position with next position
- If it's not out of bounds, we simply update the image and current position with next position

### clickOnPrevious
- We calculate the previous position and we check if it's out of bounds
- If it's out of bounds we do nothing, as the current image is the first one of the list
- If not we update the image and current position with previous position.

### clickOnToggle

- The simpliest one, it is just a proxy betwen user and reducer to toggle from single view to gallery view.


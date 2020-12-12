import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    loadImages,
    getMoreImages,
    imageClicked,
    toggleSingleView,
    nextImageClicked,
    previousImageClicked,
} from '../actions/image-display.actions';


function mapStateToProps(state) {
    const {
        images: {
            imagesList,
            nextImages,
            gifPromise,
            nextOffset,
            isSingleViewOpen,
            currentImagePosition,
            currentImage,
        }
    } = state;
    
    return {
        imagesList,
        nextImages,
        gifPromise,
        nextOffset,
        isSingleViewOpen,
        currentImagePosition,
        currentImage,
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadImages,
            getMoreImages,
            imageClicked,
            toggleSingleView,
            nextImageClicked,
            previousImageClicked,
        },
        dispatch
    );
};

export const setImagesPropsTo = connect(mapStateToProps, matchDispatchToProps)

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    loadImages,
    getMoreImages,
    imageClicked,
    toggleSingleViewClicked,
    nextImageClicked,
    previousImageClicked,
} from '../actions/images.actions';


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
            toggleSingleViewClicked,
            nextImageClicked,
            previousImageClicked,
        },
        dispatch
    );
};

export const setImagesPropsTo = connect(mapStateToProps, matchDispatchToProps)

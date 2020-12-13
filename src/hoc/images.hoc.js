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
            isSingleViewOpen,
            currentImage,
        }
    } = state;
    
    return {
        imagesList,
        isSingleViewOpen,
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

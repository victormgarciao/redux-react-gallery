import { buttonKind, MainButton } from "../../../components/molecules/MainButton/main-button";
import { ImageActions } from "../../../components/molecules/ImageActions/image-actions";
import { setImagesPropsTo } from "../../../hoc/images.hoc";

function ImageActionsContainer(props) {
    const {
        currentImagePosition,
        toggleSingleView,
        imagesList,
        nextImageClicked,
        previousImageClicked,
        nextOffset,
    } = props;


    function handleNextImage() {
        const isLast = currentImagePosition === imagesList.length - 1;
        const nextPosition = currentImagePosition + 1;
        nextImageClicked({
            position: nextPosition,
            isLast,
            nextOffset,
        });
    }


    function handlePreviousImage() {
        const previousPosition = currentImagePosition - 1;
        previousImageClicked(previousPosition);
    }


    return (
        <ImageActions>
            <MainButton onClick={handlePreviousImage} kind={buttonKind.GREEN} >{'<<'}</MainButton>
            <MainButton onClick={toggleSingleView} kind={buttonKind.RED}>{'X'}</MainButton>
            <MainButton onClick={handleNextImage} kind={buttonKind.GREEN}>{'>>'}</MainButton>
        </ImageActions>
    );
};

export default setImagesPropsTo(ImageActionsContainer);

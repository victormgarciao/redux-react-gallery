import { Button, buttonVariant } from "../../../components/atoms/Button/button";
import { Wrapper } from "../../../components/atoms/Wrapper/wrapper";
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
        <Wrapper>
            <Button
                onClick={handlePreviousImage}
                variant={buttonVariant.GREEN}
            >
                {'<<'}
            </Button>
            <Button
                onClick={toggleSingleView}
                variant={buttonVariant.RED}
            >
                {'X'}
            </Button>
            <Button
                onClick={handleNextImage}
                variant={buttonVariant.GREEN}
            >
                {'>>'}
            </Button>
        </Wrapper>
    );
};

export default setImagesPropsTo(ImageActionsContainer);

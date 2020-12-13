import { Button, buttonVariant } from "../../../components/atoms/Button/button";
import { Wrapper } from "../../../components/atoms/Wrapper/wrapper";
import { setImagesPropsTo } from "../../../hoc/images.hoc";


function ImageActionsContainer(props) {
    const {
        toggleSingleViewClicked,
        nextImageClicked,
        previousImageClicked,
    } = props;


    return (
        <Wrapper>
            <Button
                onClick={previousImageClicked}
                variant={buttonVariant.GREEN}
            >
                {'<<'}
            </Button>
            <Button
                onClick={toggleSingleViewClicked}
                variant={buttonVariant.RED}
            >
                {'X'}
            </Button>
            <Button
                onClick={nextImageClicked}
                variant={buttonVariant.GREEN}
            >
                {'>>'}
            </Button>
        </Wrapper>
    );
};

export default setImagesPropsTo(ImageActionsContainer);

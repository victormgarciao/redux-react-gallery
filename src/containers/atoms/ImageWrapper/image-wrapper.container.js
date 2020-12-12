import { ImageWrapper } from "../../../components/molecules/ImageWrapper/image-wrapper";
import { setImagesPropsTo } from "../../../hoc/images.hoc";

function ImageWrapperContainer(props) {
    const {
        currentImage : {
            title,
            images: {
                original: {
                    webp: source,
                    width,
                    height,
                }
            }
        }
    } = props;

    return (
        <ImageWrapper>
            <img
                src={source}
                alt={title}
                styles={{
                    width,
                    height,
                    WebkitTransition: 'all 300ms ease-in-out 0s',
                    MozTransition: 'all 300ms ease-in-out 0s',
                    msTransition: 'all 300ms ease-in-out 0s',
                    OTransition: 'all 300ms ease-in-out 0s',
                    transition: 'all 300ms ease-in-out 0s',
                }}
            />
        </ImageWrapper>
    );
};

export default setImagesPropsTo(ImageWrapperContainer);

import React from "react";
import ImageWrapperContainer from "../../atoms/ImageWrapper/image-wrapper.container";
import ImageActionsContainer from "../../atoms/ImageActions/image-actions.container";
import { setImagesPropsTo } from "../../../hoc/images.hoc";
import { Wrapper, wrapperVariants } from "../../../components/atoms/Wrapper/wrapper";


function SingleViewContainer(props) {
    const { isSingleViewOpen, currentImage : { title } } = props;
        

    return (
        <>
            {
                isSingleViewOpen && (
                    <Wrapper
                        variant={wrapperVariants.COLUMN_DIRECTION}
                        data-testid="single-view"
                    >
                        <Wrapper><h3>{title}</h3></Wrapper>
                        <Wrapper variant={wrapperVariants.COLUMN_DIRECTION}>
                            <ImageWrapperContainer />
                            <ImageActionsContainer />
                        </Wrapper>
                    </Wrapper>
                )
            }
        </>
    );
}

export default setImagesPropsTo(SingleViewContainer);

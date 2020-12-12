import React from "react";
import ImageWrapperContainer from "../../atoms/ImageWrapper/image-wrapper.container";
import ImageActionsContainer from "../../atoms/ImageActions/image-actions.container";
import { setImagesPropsTo } from "../../../hoc/images.hoc";
import { ViewHandler } from "../../../components/molecules/viewHandler/view-handler";
import { ImageDescription } from "../../../components/molecules/ImageDescription/image-description";
import { SingleView } from "../../../components/molecules/SingleView/single-view";


function SingleViewContainer(props) {
    const { isSingleViewOpen, currentImage : { title } } = props;
        

    return (
        <>
            {
                isSingleViewOpen && (
                    <SingleView>
                        <ImageDescription>
                            <h3>{title}</h3>
                        </ImageDescription>
                        <ViewHandler>
                            <ImageWrapperContainer />
                            <ImageActionsContainer />
                        </ViewHandler>
                    </SingleView>
                )
            }
        </>
    );
}

export default setImagesPropsTo(SingleViewContainer);

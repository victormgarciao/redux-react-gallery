import React, { useState } from "react";
import { ImageHovered } from "../../../components/atoms/ImageHovered/image-hovered";

export function PictureContainer(props) {
    const { id, title, onClickImage, images: { fixed_height } } = props;
    const { webp: source, width, height, } = fixed_height;

    const [ isHovered, setIsHovered ] = useState(false);

    function handleIsHovered(value) {
        return function handleIsHoveredSupport() {
            setIsHovered(value);
        }
    }

    return (
        <picture 
            id={id}
            style={{
                position: 'relative',
                margin: '10px',
            }}
            onMouseEnter={handleIsHovered(true)}
            onMouseLeave={handleIsHovered(false)}
            onClick={onClickImage(id)}
        >
            <img src={source} alt={title}/>
            <ImageHovered
                isHovered={isHovered}
                width={width}
                height={height}
            >
                {title}
            </ImageHovered>
        </picture>
    );
}
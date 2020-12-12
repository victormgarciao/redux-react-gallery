import React, { Component } from 'react';
import { GalleryButton } from '../../../components/molecules/GalleryButton/galery-button';
import { PictureWrapper } from '../../../components/molecules/PicturesWrapper/picture-wrapper';
import { setImagesPropsTo } from '../../../hoc/images.hoc';
import { PictureContainer } from '../../atoms/PictureContainer/picture.container';


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        }

        this.handleClickMore = this.handleClickMore.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }


    componentDidMount() {
        this.props.loadImages();
    }


    handleClickMore(event) {
        event.preventDefault();
        this.props.getMoreImages(this.props.nextOffset)
    }
    
    
    handleClickImage(id) {
        return (event) => {
            event.preventDefault();
            this.props.imageClicked(id);
        }
    }


    render() {
        return !this.props.isSingleViewOpen
            ? (
                <>
                    <PictureWrapper>
                        {this.props.imagesList.map((imageData) => (
                            <PictureContainer
                                id={imageData.id}
                                key={imageData.id}
                                title={imageData.title}
                                images={imageData.images}
                                onClickImage={this.handleClickImage}
                            />
                        ))}
                    </PictureWrapper>
                    <GalleryButton onClick={this.handleClickMore}>
                        <span>More Gifs!!!!</span>
                    </GalleryButton>
                </>
            )
            : null
    }
}

export default setImagesPropsTo(Gallery);

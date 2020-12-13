import React, { Component } from 'react';
import { PictureWrapper } from '../../../components/atoms/PicturesWrapper/picture-wrapper';
import { setImagesPropsTo } from '../../../hoc/images.hoc';
import { PictureContainer } from '../../atoms/PictureContainer/picture.container';
import { Button, buttonVariant } from '../../../components/atoms/Button/button';


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
        this.props.getMoreImages();
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
                    <PictureWrapper data-testid="gallery-picture">
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
                    <Button
                        onClick={this.handleClickMore}
                        variant={buttonVariant.GREEN}
                        data-testid="gallery-button"
                    >
                        <span>More Gifs!!!!</span>
                    </Button>
                </>
            )
            : null
    }
}

export default setImagesPropsTo(Gallery);

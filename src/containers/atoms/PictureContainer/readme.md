# Picture Container

It renders the space for the image in Single View

## Usage

```
import { PictureContainer } from 'src/containers/atoms/picture.containers';
```

## Props


| Name | Description | Default |
|------|-------------|---------|
| id     |  image id         |         |
|   title |       image title    |         |
|   onClickImage |       action when click on image    |         |
|   images |       data of the set of images, sizes, urls, etc    |         |


```
  <PictureContainer
    id={'foo'}
    title={tit'foo'}
    onClickImage={() => foo}
    images={imag'foo'}
  />
```

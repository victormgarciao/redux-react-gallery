# Image Actions Container

It renders the set of buttons to interact with single view image
Room for improvement: this file can be confused with images.actions.js we could name it differently

## Usage

```
import ImageActions from 'src/containers/atoms/image-actions.containers';
```

## Props


| Name | Description | Default |
|------|-------------|---------|
| toggleSingleViewClicked     |  action to toggle from gallery to single view, it comes from HOC         |         |
|   nextImageClicked |       action to trigger next image, it comse from HOC    |         |
|   previousImageClicked |       action to open previous image, it comse from HOC    |         |


```
  <ImageActions />

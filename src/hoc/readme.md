### images.hoc.js

- In order to avoid repetition, we are gonna use connect from `react-redux`
- This hoc has been used in some containers and we connect all states we need and all images actions (user interactions)

## usage

```
import { setImagesPropsTo } from 'src/hoc/images.hoc'

...

function FooComponent(props) { // or Class Component
...
}

export default setImagesPropsTo(FooComponent);
```

## States
- imagesList
- isSingleViewOpen
- currentImage

## actions
- loadImages
- getMoreImages
- imageClicked
- toggleSingleViewClicked
- nextImageClicked
- previousImageClicked,

# Button

Styled component with some variants for this application buutons.
Room for improvement: We can make it more customizables but so far, they are all we need.

## Usage
```
import { Button, buttonVariant } from 'src/components/atoms/Button/button';

<Button variant={buttonVariant.RED}>some label</Button>
<Button variant={buttonVariant.GREEN}>some label</Button>
```

## Props
| Name | Description | Default |
|------|-------------|---------|
| variant     |  variation of the button (so far only for bg color)         |   default html button color      |

```
buttonVariant {
    RED: 'red',
    GREEN: 'green'
};
```

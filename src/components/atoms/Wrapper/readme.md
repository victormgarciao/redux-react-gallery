# Image Wrapper Component

- Styled component for generic wrapper with flexbox
- It has a variant in case we want column direction instead of row

## Usage

```
import { Wrapper, wrapperVariants } from 'src/components/atoms/Wrapper/wrapper';

...

<Wrapper>
    // Something here row direction
</Wrapper>
<Wrapper variant={wrapperVariants.COLUMN_DIRECTION}>
    // Something here column direction
</Wrapper>

```

## Props


| Name | Description | Default |
|------|-------------|---------|
| variant     |  variation of the wrapper (so far only for direction)         |         |


```
  wrapperVariants = {
      'COLUMN_DIRECTION': 'columnDirection',
  }
```

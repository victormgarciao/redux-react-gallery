# Actions

- In this project, an action is when user interact in any way with the application.
- Each action goes to an effect allocated in a saga file with or without some data.
- They are different from messages, which are very similar, but they are the actions that are triggered by an effect https://github.com/victormgarciao/redux-react-gallery/blob/master/src/messages/readme.md

## Usage

```
import {name_action} from 'src/actions/something.actions';

...

name_action();
or
name_action(some_data);

...
```

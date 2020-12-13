# Messages

- In this project, a message is an action triggered by an effect from a saga.
- Each action (user interaction) goes to an effect allocated in a saga, this can trigger one or many messages which will interact with some reducer in order to change the state.
- They are different from actions, which are very similar, but they are user interactions (click, load) https://github.com/victormgarciao/redux-react-gallery/blob/master/src/actions/readme.md

## Usage

```
import {name_message} from 'src/messages/something.messages';

...

name_message();
or
name_message(some_data);

...
```
## Notes

- Messages constants are allocated here too, their names should ber prefixed by M_ so an action should be named `M_SOME_MESSAGE`
- By differntiating actions from users and actions from effects (messages) we can debug better and detect a bug's source faster

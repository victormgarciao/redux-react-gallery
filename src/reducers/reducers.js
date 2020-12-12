import { combineReducers } from 'redux';
import { imageDisplayReducer } from './image-display.reducer';


export const allReducers = combineReducers({
    images: imageDisplayReducer,
});

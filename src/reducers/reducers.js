import { combineReducers } from 'redux';
import { imageDisplayReducer } from './images.reducer';


export const allReducers = combineReducers({
    images: imageDisplayReducer,
});

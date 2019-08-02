import { combineReducers } from 'redux';
import { getPhotosReducer } from './reducers';

export default combineReducers({
    // reducers
    photos: getPhotosReducer,
});

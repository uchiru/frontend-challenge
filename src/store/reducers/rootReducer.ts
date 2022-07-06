import {combineReducers} from 'redux';
import {galleryReducer} from './galleryReducer';
import {fetchReducer} from './fetchReducer';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
    fetch: fetchReducer
})

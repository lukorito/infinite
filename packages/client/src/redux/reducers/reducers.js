import { GET_PHOTOS } from '../actions/constants';

const initialState = {
    photos: [],
    pagination: [],
    loading: false,
    success: true,
};

export const getPhotosReducer = (state = initialState, action) => {
    switch (action.type) {
    case `${GET_PHOTOS}_PENDING`:
        return {
            ...state,
            loading: true,
        };
        case `${GET_PHOTOS}_FULFILLED`:
        return {
            ...state,
            loading: false,
            photos: [...state.photos, ...action.payload.data],
            pagination: [...action.payload.data],
            success: true,
        };

    case `${GET_PHOTOS}_REJECTED`:
        return {
            ...state,
            loading: false,
            success: false,
        };
    default:
        return {
            ...state,
        };
    }
};

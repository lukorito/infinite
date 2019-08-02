import { GET_PHOTOS } from './constants';
import axiosInstance from '../../utils/axiosInstance';

export const getPhotos = (page, count) => ({
    type: GET_PHOTOS,
    payload: axiosInstance.get(`/api/photos?page=${page}&count=${count}`),
});

import {getData} from './api.js';
import {renderGetErrorMessage} from './create-error.js';
import {renderPictures} from './render-pictures.js';
import {filterImages, addFilterListeners} from './filter-images.js';

const GET_URL = 'https://27.javascript.pages.academy/kekstagram/data';

const imgFilter = document.querySelector('.img-filters');

const onGetSuccess = (data) => {
  imgFilter.classList.remove('img-filters--inactive');
  renderPictures(filterImages(data));
  addFilterListeners(data);
};

const loadImages = () => {
  getData(GET_URL, onGetSuccess, renderGetErrorMessage);
};

export {loadImages};

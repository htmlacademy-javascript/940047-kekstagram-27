import {renderPictures} from './render-pictures.js';
import {createRandomArrayFromRange, debounce} from './util.js';

const DEBOUNCE_DELAY = 500;
const MAX_RANDOM_COUNT = 10;

const imageFiltersForm = document.querySelector('.img-filters__form');
const imageFiltersButtons = document.querySelectorAll('.img-filters__button');
const picturesContainer = document.querySelector('.pictures');

const hideActiveState = () => {
  imageFiltersButtons.forEach((button) => button.classList.remove('img-filters__button--active'));
};

const applyFilter = (id, data) => {
  let newImages = [];
  switch (id) {
    case 'filter-random':
      newImages = createRandomArrayFromRange(0, data.length - 1, MAX_RANDOM_COUNT).map((index) => data[index]);
      break;
    case 'filter-discussed':
      newImages = data.slice().sort((a, b) => b.comments.length - a.comments.length);
      break;
    default:
      newImages = data;
  }
  picturesContainer.querySelectorAll('.picture').forEach((item) => item.remove());
  renderPictures(newImages);
};

const applyTimeOut = debounce(applyFilter, DEBOUNCE_DELAY);

const addFilterListener = (data) => {
  imageFiltersForm.addEventListener('click', (evt) => {
    if (evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
      hideActiveState();
      evt.target.classList.add('img-filters__button--active');
      const id = evt.target.id;
      applyTimeOut(id, data);
    }
  });
};

export {addFilterListener};

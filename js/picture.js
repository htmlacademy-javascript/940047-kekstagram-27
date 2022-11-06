import {createPhotos} from './data.js';

const similarListElement = document.querySelector('.pictures');
const similarPhotoElement = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhoto = createPhotos();

const similarListFragment = document.createDocumentFragment();

similarPhoto.forEach(({url,comments, likes}) => {
  const photoElement = similarPhotoElement.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(photoElement);
});

similarListElement.appendChild(similarListFragment);

export {similarPhotoElement};

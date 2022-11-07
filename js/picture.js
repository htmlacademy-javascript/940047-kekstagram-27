import {createPhotos} from './data.js';

const similarListElement = document.querySelector('.pictures');
const similarPhotoElement = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhoto = createPhotos();

const renderPictures = () => {
  similarPhoto.forEach(({url,comments, likes}) => {
    const photoElement = similarPhotoElement.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    similarListElement.append(photoElement);
  });
};

export {renderPictures};

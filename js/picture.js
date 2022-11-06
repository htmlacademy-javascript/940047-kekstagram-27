import {createPhotos} from './data.js';

const similarListElement = document.querySelector('.pictures'); //Контейнер для изображений от других пользователей
const similarPhotoElement = document.querySelector('#picture') //Шаблон изображения случайного пользователя, который копируем
  .content
  .querySelector('.picture');

const similarPhoto = createPhotos(); // то что импортировали

const similarListFragment = document.createDocumentFragment(); // вставляем всё через DocumentFragmen

similarPhoto.forEach(({url,comments, likes}) => {
  const photoElement = similarPhotoElement.cloneNode(true); //клонируем шаблон
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(photoElement); //отрисовка
});

similarListElement.appendChild(similarListFragment);

export {similarPhotoElement};

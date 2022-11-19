import {showBigPicture} from './big-picture.js';

const similarListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture') .content .querySelector('.picture');

const createPicture = ({url, description, comments, likes}) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  picture.addEventListener('click', () => {
    showBigPicture({url, description, comments, likes});
  });

  return picture;
};

const renderPictures = (data) => {
  data.forEach((picture) => {
    const pictureElement = createPicture(picture);
    similarListElement.append(pictureElement);
  });
};

export {renderPictures};

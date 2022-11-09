const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

const renderBigPictures = () => {
  bigPicture.forEach(({url, comments, likes}) => {
    const photoElement = similarPhotoElement.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    similarListElement.append(photoElement);
  });
};

const renderBigPicturesDescription = (url, likes, description) => {
  bigPicture.querySelector('.big-picture__img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.big-picture__img').alt = description;
};


export {bigPicture};

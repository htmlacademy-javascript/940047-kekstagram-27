import { renderPictures } from './picture.js';
import { showAlert } from './api.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram/data');
.then((response) => response.json())
  .then((pictures) => {
    renderPictures(pictures);
  });
};

const sendData = (onSuccess, showAlert) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
};


export { getData, sendData };

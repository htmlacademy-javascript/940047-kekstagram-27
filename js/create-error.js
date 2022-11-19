import {isEscapeKey} from './util.js';

const GET_ERROR_TEXT = 'Ошибка при загрузке данных';
const POST_ERROR_TEXT = 'Ошибка размещения фотогрфаии';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const createError = (text) => {
  const errorClone = errorTemplate.cloneNode(true);
  errorClone.querySelector('.error__title').textContent = text;
  document.body.append(errorClone);
};

const onDocumentClick = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.error')) {
    evt.target.closest('.error').remove();
    removeListeners();
  }
};

const onDocumentKeydown = (evt) => {
  evt.preventDefault();
  const errorBlock = document.querySelector('.error');
  if (isEscapeKey(evt) && errorBlock) {
    errorBlock.remove();
    removeListeners();
  }
};

const addListeners = () => {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function removeListeners() {
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const renderGetErrorMessage = () => {
  createError(GET_ERROR_TEXT)
  addListeners();
};

const renderPostErrorMessage = () => {
  createError(POST_ERROR_TEXT);
  addListeners();
};

export {renderGetErrorMessage, renderPostErrorMessage};

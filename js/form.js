import {addValidator, validateForm, resetValidate} from './validate-form.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  addEventListeners();
};

const hideModal = () => {
  form.reset();
  resetValidate();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  removeEventListener();
};

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {}
};

function removeEventListener() {
  document.removeEventListener('keydown', onEscKeyDown);
  cancelButton.removeEventListener('click', onCancelButtonClick);
}

function addEventListeners() {
  document.addEventListener('keydown', onEscKeyDown);
  cancelButton.addEventListener('click', onCancelButtonClick);
}

const initForm = () => {
  addValidator();
  fileField.addEventListener('change', onFileInputChange);
  form.addEventListener('submit', onFormSubmit);
};

export {initForm};

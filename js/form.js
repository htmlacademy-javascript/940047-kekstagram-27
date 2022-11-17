import {addValidator, validateForm, resetValidate} from './validate-form.js';
import {resetScale, addScaleEffect} from './scale.js';
import {changeEffect, resetEffects} from './effect.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const uploadEffectsBlock = document.querySelector('.img-upload__effects');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const showModal = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addEventListeners();
};

const hideModal = () => {
  form.reset();
  resetValidate();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeEventListener();
  resetEffects();
  resetScale();
};

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

const onCancelButtonClick = () => hideModal();
const onFileInputChange = () => showModal();

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
  }
};

const onUploadEffectsBlockChange = (evt) => changeEffect(evt.target.value);

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
  addScaleEffect();
  fileField.addEventListener('change', onFileInputChange);
  form.addEventListener('submit', onFormSubmit);
  uploadEffectsBlock.addEventListener('change', onUploadEffectsBlockChange);
};

export {initForm};

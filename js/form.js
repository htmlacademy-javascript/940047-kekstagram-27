import {addValidator, validateForm, resetValidate} from './validate-form.js';
import {resetScale, addScaleEffect} from './scale.js';
import {changeEffect, resetEffects} from './effect.js';
import {sendData} from './api.js';
import {renderSuccessMessage} from './create-success.js';
import {renderPostErrorMessage} from './create-error.js';

const SEND_URL = 'https://27.javascript.pages.academy/kekstagram';
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_PREVIEW_IMAGE = 'img/upload-default-image.jpg';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const uploadEffectsBlock = document.querySelector('.img-upload__effects');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitBtn = document.querySelector('.img-upload__submit');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');
const effectLevelFieldset = document.querySelector('.effect-level');

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
  imagePreview.src = DEFAULT_PREVIEW_IMAGE;
  effectsPreview.forEach((preview) => {
    preview.style.backgroundImage = `url('${DEFAULT_PREVIEW_IMAGE}')`;
  });
};

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

const onCancelButtonClick = () => hideModal();
const onFileInputChange = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    showModal();
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      imagePreview.src = reader.result;
      effectsPreview.forEach((preview) => {
        preview.style.backgroundImage = `url('${reader.result}')`;
      });
    });

    reader.readAsDataURL(file);
  }
};

const onPostSuccess = () => {
  submitBtn.disabled = false;
  hideModal();
  renderSuccessMessage();
};

const onPostError = () => {
  renderPostErrorMessage();
  submitBtn.disabled = false;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    submitBtn.disabled = true;
    sendData(SEND_URL, onPostSuccess, onPostError, new FormData(evt.target));
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
  effectLevelFieldset.classList.add('hidden');
  addValidator();
  addScaleEffect();
  fileField.addEventListener('change', onFileInputChange);
  form.addEventListener('submit', onFormSubmit);
  uploadEffectsBlock.addEventListener('change', onUploadEffectsBlockChange);
};

export {initForm};

const form = document.querySelector('.img-upload__form'); //наша форма в которой всё
const overlay = document.querySelector('.img-upload__overlay'); //Форма редактирования изображения
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel'); // Кнопка для закрытия формы редактирования изображения
const fileField = document.querySelector('upload-file'); //Изначальное состояние поля для загрузки изображения
const hashtagField = document.querySelector('.text__hashtags'); //Добавление хэш-тегов к изображению
const commentField = document.querySelector('.text__description'); //Добавление комментария к изображению

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_COMMENT_LENGTH = 140;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

//показать модальное окно
const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

//скрыть модальное окно
const hideModal = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtomClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ') //разбивает строки на массивы
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Хэштег написан не верно'
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

function validateComment (value) {
  return value.length <= MAX_COMMENT_LENGTH;
}

const initiateForm = () => {
  fileField.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtomClick);
  form.addEventListener('submit', onFormSubmit);
};

export {initiateForm};

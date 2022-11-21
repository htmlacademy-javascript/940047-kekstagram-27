const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;
const PERCENT_DIVIDER = 100;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

let currentValue = DEFAULT_SCALE;

const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / PERCENT_DIVIDER})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  if (currentValue > SCALE_STEP) {
    currentValue = currentValue - SCALE_STEP;
    scaleImage(currentValue);
  }
};

const onBiggerButtonClick = () => {
  if (currentValue < DEFAULT_SCALE) {
    currentValue = currentValue + SCALE_STEP;
    scaleImage(currentValue);
  }
};

const resetScale = () => {
  scaleImage();
  currentValue = DEFAULT_SCALE;
};

const addScaleEffect = () => {
  smallerButton.addEventListener('click', onSmallerButtonClick);
  biggerButton.addEventListener('click', onBiggerButtonClick);
};

export {resetScale, addScaleEffect};

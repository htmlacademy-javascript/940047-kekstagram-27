const RANGE_OPTIONS = {
  grayscale: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  invert: {
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  blur: {
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  brightness: {
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

const FILTER_NAME = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
};

const effectLevelFieldset = document.querySelector('.effect-level');
const effectValueElement = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview img');

const createSlider = () => {
  noUiSlider.create(effectLevelFieldset, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
};

const resetEffects = () => {
  if (effectLevelFieldset.noUiSlider) {
    effectLevelFieldset.noUiSlider.destroy();
  }
  imagePreview.style.filter = null;
  imagePreview.className = '';
  effectLevelFieldset.classList.add('hidden');
};

const changeEffect = (effectValue) => {
  if (effectValue === 'none') {
    resetEffects();
    return;
  }

  if (!effectLevelFieldset.noUiSlider) {
    createSlider();
  }

  effectLevelFieldset.classList.remove('hidden');

  const effect = FILTER_NAME[effectValue];
  const {min, max, step, unit} = RANGE_OPTIONS[effect];

  imagePreview.className = '';

  effectLevelFieldset.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
    connect: 'lower',
  });

  effectLevelFieldset.noUiSlider.on('update', () => {
    effectValueElement.value = effectLevelFieldset.noUiSlider.get();
    imagePreview.style.filter = `${effect}(${effectValueElement.value}${unit})`;
  });
};

export {changeEffect, resetEffects};

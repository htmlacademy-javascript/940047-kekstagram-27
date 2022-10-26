const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkLengthComment = (string, maxLength) => string.length <= maxLength;
checkLengthComment('test', 4);

export {getRandomInteger};

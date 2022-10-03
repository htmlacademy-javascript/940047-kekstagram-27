//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(-10, 12);
getRandomIntInclusive(10, 10);

getRandomIntInclusive(10, 12);
getRandomIntInclusive(12, 10);

//Функция для проверки максимальной длины строки
const checkLengthComment = (string, maxLength) => string.length <= maxLength;
checkLengthComment('test', 4);

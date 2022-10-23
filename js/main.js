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


// ==Модуль 4==
//Идентификатор опубликованной фотографии
const idPhoto = {
  min: 1,
  max: 25,
};

// Адрес фотографий
const avatarUrl = `photos/${getRandomIntInclusive(1, 25)}.jpg`;

//Описание фотографии
const descriptionPhoto = [
  'Лучшее место на земле',
  'Кормят отлично!',
  'Хочу на ручки, а не это всё!',
  'Кекстаграм без VPN прекрасен',
  'Обязательно приеду сюда снова!',
  'А что у вас на завтрак?',
];

// Генерирует количество лайков
const likesNumber = {
  min: 15,
  max: 200,
};

//Идентификатор комментария
const idMessage = {
  min: 1,
  max: 1000,
};

// Фотографии
const avatar = `img/avatar/${getRandomIntInclusive(1, 6)}.svg`;

// Список комментариев к фотографиям
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];

// Имена  комментаторов
const nameCommentators = [
  'Лена',
  'Слава',
  'Коля',
  'Валя',
  'Маша',
  'Гена',
];

// Массив объектов — список комментариев
const comments = () => {
  const randomIdMessage = getRandomIntInclusive (0, idMessage.length - 1);
  //const randomAvatarIndex = getRandomIntInclusive (0, avatar.string - 1); //строка как ее обозначать?
  //const randomMessageIndex = getRandomIntInclusive (0, message.string - 1);
  //const randomnNameCommentatorsIndex = getRandomIntInclusive (0, nameCommentators.string - 1);

  return {
    id: idMessage[randomIdMessage],
    //avatar: avatar[randomAvatarIndex],
    //message: message[randomMessageIndex],
    //name: nameCommentators[randomnNameCommentatorsIndex],
  };
};

console.log(
  comments()
);

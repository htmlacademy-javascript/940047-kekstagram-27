const PHOTO_COUNTER = 25;

const DESCRIPTIONS = [
  'Лучшее место на земле',
  'Кормят отлично!',
  'Хочу на ручки, а не это всё!',
  'Кекстаграм без VPN прекрасен',
  'Обязательно приеду сюда снова!',
  'А что у вас на завтрак?',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Лена', 'Слава', 'Коля', 'Валя', 'Маша', 'Гена'];

const likesCount = {
  min: 15,
  max: 200,
};

const commentsCount = {
  min: 15,
  max: 200,
};

const avatarCount = {
  min: 1,
  max: 6,
};

const photosCount = {
  min: 1,
  max: 25,
};

let photoId = 0;
let commentId = 0;

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

const createMessage = () => {
  const array = Array.from({ length: getRandomInteger(1, 2) }, () => MESSAGES[getRandomInteger(0, MESSAGES.length - 1)]);
  return [...new Set(array)].join(' ');
};

const createAvatarUrl = () => `img / avatar / ${getRandomInteger(avatarCount.min, avatarCount.max)}.jpg`;
const createPhotoUrl = () => `photos / ${getRandomInteger(photosCount.min, photosCount.max)}.jpg`;

const createComment = () => {
  commentId++;
  return {
    id: commentId,
    avatar: createAvatarUrl(),
    message: createMessage(),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

const createPhoto = () => {
  photoId++;
  return {
    id: photoId,
    url: createPhotoUrl(),
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(likesCount.min, likesCount.max),
    comments: Array.from({ length: getRandomInteger(commentsCount.min, commentsCount.max) }, createComment),
  };
};

const createPhotos = () => Array.from({ length: PHOTO_COUNTER }, createPhoto);

createPhotos();

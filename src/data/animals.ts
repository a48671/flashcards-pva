import { BASENAME } from '@/config';
import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const animals: Record<FlashcardId, IFlashcard> = {
  'dog': { id: 'dog', nativeText: 'собака', targetText: 'dog', image: `${BASENAME}/images/dog.png`, setId: 'animals' },
  'cat': { id: 'cat', nativeText: 'кошка', targetText: 'cat', image: `${BASENAME}/images/cat.png`, setId: 'animals' },
  'bear': { id: 'bear', nativeText: 'медведь', targetText: 'bear', image: `${BASENAME}/images/bear.png`, setId: 'animals' },
  'elephant': { id: 'elephant', nativeText: 'слон', targetText: 'elephant', image: `${BASENAME}/images/elephant.png`, setId: 'animals' },
  'duck': { id: 'duck', nativeText: 'утка', targetText: 'duck', image: `${BASENAME}/images/duck.png`, setId: 'animals' },
  'frog': { id: 'frog', nativeText: 'лягушка', targetText: 'frog', image: `${BASENAME}/images/frog.png`, setId: 'animals' },
  'cow': { id: 'cow', nativeText: 'корова', targetText: 'cow', image: `${BASENAME}/images/cow.png`, setId: 'animals' },
  'goat': { id: 'goat', nativeText: 'коза', targetText: 'goat', image: `${BASENAME}/images/goat.png`, setId: 'animals' },
  'monkey': { id: 'monkey', nativeText: 'обезьяна', targetText: 'monkey', image: `${BASENAME}/images/monkey.png`, setId: 'animals' },
  'donkey': { id: 'donkey', nativeText: 'осёл', targetText: 'donkey', image: `${BASENAME}/images/donkey.png`, setId: 'animals' },
  'hippo': { id: 'hippo', nativeText: 'бегемот', targetText: 'hippo', image: `${BASENAME}/images/hippo.png`, setId: 'animals' },
  'giraffe': { id: 'giraffe', nativeText: 'жираф', targetText: 'giraffe', image: `${BASENAME}/images/giraffe.png`, setId: 'animals' },
  'horse': { id: 'horse', nativeText: 'лошадь', targetText: 'horse', image: `${BASENAME}/images/horse.png`, setId: 'animals' },
  'sheep': { id: 'sheep', nativeText: 'овца', targetText: 'sheep', image: `${BASENAME}/images/sheep.png`, setId: 'animals' },
  'crocodile': { id: 'crocodile', nativeText: 'крокодил', targetText: 'crocodile', image: `${BASENAME}/images/crocodile.png`, setId: 'animals' },
  'bird': { id: 'bird', nativeText: 'птица', targetText: 'bird', image: `${BASENAME}/images/bird.png`, setId: 'animals' },
  'zebra': { id: 'zebra', nativeText: 'зебра', targetText: 'zebra', image: `${BASENAME}/images/zebra.png`, setId: 'animals' },
  'snake': { id: 'snake', nativeText: 'змея', targetText: 'snake', image: `${BASENAME}/images/snake.png`, setId: 'animals' },
  'tiger': { id: 'tiger', nativeText: 'тигр', targetText: 'tiger', image: `${BASENAME}/images/tiger.png`, setId: 'animals' },
  'mouse': { id: 'mouse', nativeText: 'мышь', targetText: 'mouse', image: `${BASENAME}/images/mouse.png`, setId: 'animals' },
  'mice': { id: 'mice', nativeText: 'мыши', targetText: 'mice', image: `${BASENAME}/images/mice.png`, setId: 'animals' },
  'polar-bear': { id: 'polar-bear', nativeText: 'белый медведь', targetText: 'polar bear', image: `${BASENAME}/images/polar-bear.png`, setId: 'animals' },
  'jellyfish': { id: 'jellyfish', nativeText: 'медуза', targetText: 'jellyfish', image: `${BASENAME}/images/jellyfish.png`, setId: 'animals' },
  'alien': { id: 'alien', nativeText: 'пришелец', targetText: 'alien', image: `${BASENAME}/images/alien.png`, setId: 'animals' },
};

export default animals;
  
import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const animals: Record<FlashcardId, IFlashcard> = {
  'dog': { id: 'dog', nativeText: 'собака', targetText: 'dog', image: 'dog.png', setId: 'animals' },
  'cat': { id: 'cat', nativeText: 'кошка', targetText: 'cat', image: 'cat.png', setId: 'animals' },
  'bear': { id: 'bear', nativeText: 'медведь', targetText: 'bear', image: 'bear.png', setId: 'animals' },
  'elephant': { id: 'elephant', nativeText: 'слон', targetText: 'elephant', image: 'elephant.png', setId: 'animals' },
  'duck': { id: 'duck', nativeText: 'утка', targetText: 'duck', image: 'duck.png', setId: 'animals' },
  'frog': { id: 'frog', nativeText: 'лягушка', targetText: 'frog', image: 'frog.png', setId: 'animals' },
  'cow': { id: 'cow', nativeText: 'корова', targetText: 'cow', image: 'cow.png', setId: 'animals' },
  'goat': { id: 'goat', nativeText: 'коза', targetText: 'goat', image: 'goat.png', setId: 'animals' },
  'monkey': { id: 'monkey', nativeText: 'обезьяна', targetText: 'monkey', image: 'monkey.png', setId: 'animals' },
  'donkey': { id: 'donkey', nativeText: 'осёл', targetText: 'donkey', image: 'donkey.png', setId: 'animals' },
  'hippo': { id: 'hippo', nativeText: 'бегемот', targetText: 'hippo', image: 'hippo.png', setId: 'animals' },
  'giraffe': { id: 'giraffe', nativeText: 'жираф', targetText: 'giraffe', image: 'giraffe.png', setId: 'animals' },
  'horse': { id: 'horse', nativeText: 'лошадь', targetText: 'horse', image: 'horse.png', setId: 'animals' },
  'sheep': { id: 'sheep', nativeText: 'овца', targetText: 'sheep', image: 'sheep.png', setId: 'animals' },
  'crocodile': { id: 'crocodile', nativeText: 'крокодил', targetText: 'crocodile', image: 'crocodile.png', setId: 'animals' },
  'bird': { id: 'bird', nativeText: 'птица', targetText: 'bird', image: 'bird.png', setId: 'animals' },
  'zebra': { id: 'zebra', nativeText: 'зебра', targetText: 'zebra', image: 'zebra.png', setId: 'animals' },
  'snake': { id: 'snake', nativeText: 'змея', targetText: 'snake', image: 'snake.png', setId: 'animals' },
  'tiger': { id: 'tiger', nativeText: 'тигр', targetText: 'tiger', image: 'tiger.png', setId: 'animals' },
  'mouse': { id: 'mouse', nativeText: 'мышь', targetText: 'mouse', image: 'mouse.png', setId: 'animals' },
  'mice': { id: 'mice', nativeText: 'мыши', targetText: 'mice', image: 'mice.png', setId: 'animals' },
  'polar-bear': { id: 'polar-bear', nativeText: 'белый медведь', targetText: 'polar bear', image: 'polar-bear.png', setId: 'animals' },
  'jellyfish': { id: 'jellyfish', nativeText: 'медуза', targetText: 'jellyfish', image: 'jellyfish.png', setId: 'animals' },
  'alien': { id: 'alien', nativeText: 'пришелец', targetText: 'alien', image: 'alien.png', setId: 'animals' },
};

export default animals;
  
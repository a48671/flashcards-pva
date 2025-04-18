import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const colorsSet: Record<FlashcardId, IFlashcard> = {
  red: {
    id: 'red',
    nativeText: 'красный',
    targetText: 'red',
    image: 'red.png',
    setId: 'colors',
  },
  blue: {
    id: 'blue',
    nativeText: 'синий',
    targetText: 'blue',
    image: 'blue.png',
    setId: 'colors',
  },
  yellow: {
    id: 'yellow',
    nativeText: 'жёлтый',
    targetText: 'yellow',
    image: 'yellow.png',
    setId: 'colors',
  },
  green: {
    id: 'green',
    nativeText: 'зелёный',
    targetText: 'green',
    image: 'green.png',
    setId: 'colors',
  },
  black: {
    id: 'black',
    nativeText: 'чёрный',
    targetText: 'black',
    image: 'black.png',
    setId: 'colors',
  },
  white: {
    id: 'white',
    nativeText: 'белый',
    targetText: 'white',
    image: 'white.png',
    setId: 'colors',
  },
  pink: {
    id: 'pink',
    nativeText: 'розовый',
    targetText: 'pink',
    image: 'pink.png',
    setId: 'colors',
  },
  brown: {
    id: 'brown',
    nativeText: 'коричневый',
    targetText: 'brown',
    image: 'brown.png',
    setId: 'colors',
  },
  grey: {
    id: 'grey',
    nativeText: 'серый',
    targetText: 'grey',
    image: 'grey.png',
    setId: 'colors',
  },
  orange: {
    id: 'orange',
    nativeText: 'оранжевый',
    targetText: 'orange',
    image: 'orange.png',
    setId: 'colors',
  },
  purple: {
    id: 'purple',
    nativeText: 'фиолетовый',
    targetText: 'purple',
    image: 'purple.png',
    setId: 'colors',
  },
};

export default colorsSet;
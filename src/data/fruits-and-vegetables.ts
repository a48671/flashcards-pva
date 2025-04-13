import { BASENAME } from '@/config';
import { FlashcardId, IFlashcard } from '../domain/flashcard';

const fruitsAndVegetables: Record<FlashcardId, IFlashcard> = {
  1: {
    id: '1',
    nativeText: 'Яблоко',
    targetText: 'Apple',
    image: `${BASENAME}/images/apple.png`,
    audio: `${BASENAME}/audio/apple.mp3`,
  },
  2: {
    id: '2',
    nativeText: 'Банан',
    targetText: 'Banana',
    image: `${BASENAME}/images/banana.png`,
    audio: `${BASENAME}/audio/banana.mp3`,
  },
  3: {
    id: '3',
    nativeText: 'Морковь',
    targetText: 'Carrot',
    image: `${BASENAME}/images/carrot.png`,
    audio: `${BASENAME}/audio/carrot.mp3`,
  },
  4: {
    id: '4',
    nativeText: 'Огурец',
    targetText: 'Cucumber',
    image: `${BASENAME}/images/cucumber.png`,
    audio: `${BASENAME}/audio/cucumber.mp3`,
  },
  5: {
    id: '5',
    nativeText: 'Помидор',
    targetText: 'Tomato',
    image: `${BASENAME}/images/tomato.png`,
    audio: `${BASENAME}/audio/tomato.mp3`,
  },
  6: {
    id: '6',
    nativeText: 'Апельсин',
    targetText: 'Orange',
    image: `${BASENAME}/images/orange.png`,
    audio: `${BASENAME}/audio/orange.mp3`,
  },
  7: {
    id: '7',
    nativeText: 'Клубника',
    targetText: 'Strawberry',
    image: `${BASENAME}/images/strawberry.png`,
    audio: `${BASENAME}/audio/strawberry.mp3`,
  },
  8: {
    id: '8',
    nativeText: 'Брокколи',
    targetText: 'Broccoli',
    image: `${BASENAME}/images/broccoli.png`,
    audio: `${BASENAME}/audio/broccoli.mp3`,
  },
  9: {
    id: '9',
    nativeText: 'Лук',
    targetText: 'Onion',
    image: `${BASENAME}/images/onion.png`,
    audio: `${BASENAME}/audio/onion.mp3`,
  },
  10: {
    id: '10',
    nativeText: 'Чеснок',
    targetText: 'Garlic',
    image: `${BASENAME}/images/garlic.png`,
    audio: `${BASENAME}/audio/garlic.mp3`,
  },
};

export default fruitsAndVegetables;

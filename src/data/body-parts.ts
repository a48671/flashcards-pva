import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const bodyParts: Record<FlashcardId, IFlashcard> = {
  head: {
    id: 'head',
    nativeText: 'голова',
    targetText: 'head',
    image: 'head.png',
    setId: 'body-parts',
  },
  hair: {
    id: 'hair',
    nativeText: 'волосы',
    targetText: 'hair',
    image: 'hair.png',
    setId: 'body-parts',
  },
  eye: {
    id: 'eye',
    nativeText: 'глаз',
    targetText: 'eye',
    image: 'eye.png',
    setId: 'body-parts',
  },
  ear: {
    id: 'ear',
    nativeText: 'ухо',
    targetText: 'ear',
    image: 'ear.png',
    setId: 'body-parts',
  },
  nose: {
    id: 'nose',
    nativeText: 'нос',
    targetText: 'nose',
    image: 'nose.png',
    setId: 'body-parts',
  },
  mouth: {
    id: 'mouth',
    nativeText: 'рот',
    targetText: 'mouth',
    image: 'mouth.png',
    setId: 'body-parts',
  },
  teeth: {
    id: 'teeth',
    nativeText: 'зубы',
    targetText: 'teeth',
    image: 'teeth.png',
    setId: 'body-parts',
  },
  hand: {
    id: 'hand',
    nativeText: 'рука (кисть)',
    targetText: 'hand',
    image: 'hand.png',
    setId: 'body-parts',
  },
  arm: {
    id: 'arm',
    nativeText: 'рука',
    targetText: 'arm',
    image: 'arm.png',
    setId: 'body-parts',
  },
  foot: {
    id: 'foot',
    nativeText: 'ступня',
    targetText: 'foot',
    image: 'foot.png',
    setId: 'body-parts',
  },
  feet: {
    id: 'feet',
    nativeText: 'ступни',
    targetText: 'feet',
    image: 'feet.png',
    setId: 'body-parts',
  },
  leg: {
    id: 'leg',
    nativeText: 'нога',
    targetText: 'leg',
    image: 'leg.png',
    setId: 'body-parts',
  },
  tail: {
    id: 'tail',
    nativeText: 'хвост',
    targetText: 'tail',
    image: 'tail.png',
    setId: 'body-parts',
  },
  body: {
    id: 'body',
    nativeText: 'тело',
    targetText: 'body',
    image: 'body.png',
    setId: 'body-parts',
  },
};
  
export default bodyParts;
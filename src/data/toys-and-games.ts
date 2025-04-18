import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const toysAndGamesSet: Record<FlashcardId, IFlashcard> = {
  toy: {
    id: 'toy',
    nativeText: 'игрушка',
    targetText: 'toy',
    image: 'toy.png',
    setId: 'toys-and-games',
  },
  teddy: {
    id: 'teddy',
    nativeText: 'плюшевый мишка',
    targetText: 'teddy',
    image: 'teddy.png',
    setId: 'toys-and-games',
  },
  doll: {
    id: 'doll',
    nativeText: 'кукла',
    targetText: 'doll',
    image: 'doll.png',
    setId: 'toys-and-games',
  },
  ball: {
    id: 'ball',
    nativeText: 'мяч',
    targetText: 'ball',
    image: 'ball.png',
    setId: 'toys-and-games',
  },
  boardGame: {
    id: 'boardGame',
    nativeText: 'настольная игра',
    targetText: 'board game',
    image: 'boardGame.png',
    setId: 'toys-and-games',
  },
  balloon: {
    id: 'balloon',
    nativeText: 'воздушный шар',
    targetText: 'balloon',
    image: 'balloon.png',
    setId: 'toys-and-games',
  },
  game: {
    id: 'game',
    nativeText: 'игра',
    targetText: 'game',
    image: 'game.png',
    setId: 'toys-and-games',
  },
  skateboard: {
    id: 'skateboard',
    nativeText: 'скейтборд',
    targetText: 'skateboard',
    image: 'skateboard.png',
    setId: 'toys-and-games',
  },
  kite: {
    id: 'kite',
    nativeText: 'воздушный змей',
    targetText: 'kite',
    image: 'kite.png',
    setId: 'toys-and-games',
  },
};

export default toysAndGamesSet;
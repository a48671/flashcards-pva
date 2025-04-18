import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const adjectives: Record<FlashcardId, IFlashcard> = {
  big: { id: 'big', nativeText: 'большой', targetText: 'big', image: 'big.png', setId: 'adjectives' },
  small: { id: 'small', nativeText: 'маленький', targetText: 'small', image: 'small.png', setId: 'adjectives' },
  old: { id: 'old', nativeText: 'старый', targetText: 'old', image: 'old.png', setId: 'adjectives' },
  young: { id: 'young', nativeText: 'молодой', targetText: 'young', image: 'young.png', setId: 'adjectives' },
  beautiful: { id: 'beautiful', nativeText: 'красивый', targetText: 'beautiful', image: 'beautiful.png', setId: 'adjectives' },
  ugly: { id: 'ugly', nativeText: 'уродливый', targetText: 'ugly', image: 'ugly.png', setId: 'adjectives' },
  clean: { id: 'clean', nativeText: 'чистый', targetText: 'clean', image: 'clean.png', setId: 'adjectives' },
  dirty: { id: 'dirty', nativeText: 'грязный', targetText: 'dirty', image: 'dirty.png', setId: 'adjectives' },
  scary: { id: 'scary', nativeText: 'страшный', targetText: 'scary', image: 'scary.png', setId: 'adjectives' },
  silly: { id: 'silly', nativeText: 'глупый', targetText: 'silly', image: 'silly.png', setId: 'adjectives' },
  funny: { id: 'funny', nativeText: 'смешной', targetText: 'funny', image: 'funny.png', setId: 'adjectives' },
  happy: { id: 'happy', nativeText: 'счастливый', targetText: 'happy', image: 'happy.png', setId: 'adjectives' },
  sad: { id: 'sad', nativeText: 'грустный', targetText: 'sad', image: 'sad.png', setId: 'adjectives' },
  good: { id: 'good', nativeText: 'хороший', targetText: 'good', image: 'good.png', setId: 'adjectives' },
  great: { id: 'great', nativeText: 'отличный', targetText: 'great', image: 'great.png', setId: 'adjectives' },
  fantastic: { id: 'fantastic', nativeText: 'фантастический', targetText: 'fantastic', image: 'fantastic.png', setId: 'adjectives' },
  cool: { id: 'cool', nativeText: 'крутой', targetText: 'cool', image: 'cool.png', setId: 'adjectives' },
  nice: { id: 'nice', nativeText: 'приятный', targetText: 'nice', image: 'nice.png', setId: 'adjectives' },
  new: { id: 'new', nativeText: 'новый', targetText: 'new', image: 'new.png', setId: 'adjectives' },
  closed: { id: 'closed', nativeText: 'закрытый', targetText: 'closed', image: 'closed.png', setId: 'adjectives' },
  open: { id: 'open', nativeText: 'открытый', targetText: 'open', image: 'open.png', setId: 'adjectives' },
  short: { id: 'short', nativeText: 'короткий / низкий', targetText: 'short', image: 'short.png', setId: 'adjectives' },
  long: { id: 'long', nativeText: 'длинный', targetText: 'long', image: 'long.png', setId: 'adjectives' },
  correct: { id: 'correct', nativeText: 'правильный', targetText: 'correct', image: 'correct.png', setId: 'adjectives' },
  right: { id: 'right', nativeText: 'правильный / правый', targetText: 'right', image: 'right.png', setId: 'adjectives' },
};
  
export default adjectives;
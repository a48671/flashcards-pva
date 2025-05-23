import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const questionsAndGrammarWords: Record<FlashcardId, IFlashcard> = {
  what: { id: 'what', nativeText: 'что', targetText: 'what', image: 'what.png', setId: 'questions-and-grammar-words' },
  who: { id: 'who', nativeText: 'кто', targetText: 'who', image: 'who.png', setId: 'questions-and-grammar-words' },
  whose: { id: 'whose', nativeText: 'чей', targetText: 'whose', image: 'whose.png', setId: 'questions-and-grammar-words' },
  where: { id: 'where', nativeText: 'где', targetText: 'where', image: 'where.png', setId: 'questions-and-grammar-words' },
  when: { id: 'when', nativeText: 'когда', targetText: 'when', image: 'when.png', setId: 'questions-and-grammar-words' },
  which: { id: 'which', nativeText: 'который', targetText: 'which', image: 'which.png', setId: 'questions-and-grammar-words' },
  how: { id: 'how', nativeText: 'как', targetText: 'how', image: 'how.png', setId: 'questions-and-grammar-words' },
  'how old': { id: 'how-old', nativeText: 'сколько лет', targetText: 'how old', image: 'how-old.png', setId: 'questions-and-grammar-words' },
  'how many': { id: 'how-many', nativeText: 'сколько', targetText: 'how many', image: 'how-many.png', setId: 'questions-and-grammar-words' },
  and: { id: 'and', nativeText: 'и', targetText: 'and', image: 'and.png', setId: 'questions-and-grammar-words' },
  but: { id: 'but', nativeText: 'но', targetText: 'but', image: 'but.png', setId: 'questions-and-grammar-words' },
  or: { id: 'or', nativeText: 'или', targetText: 'or', image: 'or.png', setId: 'questions-and-grammar-words' },
  because: { id: 'because', nativeText: 'потому что', targetText: 'because', image: 'because.png', setId: 'questions-and-grammar-words' },
  if: { id: 'if', nativeText: 'если', targetText: 'if', image: 'if.png', setId: 'questions-and-grammar-words' },
  not: { id: 'not', nativeText: 'не', targetText: 'not', image: 'not.png', setId: 'questions-and-grammar-words' },
  no: { id: 'no', nativeText: 'нет', targetText: 'no', image: 'no.png', setId: 'questions-and-grammar-words' },
  yes: { id: 'yes', nativeText: 'да', targetText: 'yes', image: 'yes.png', setId: 'questions-and-grammar-words' },
  'would like': { id: 'would-like', nativeText: 'хотел бы', targetText: 'would like', image: 'would-like.png', setId: 'questions-and-grammar-words' },
};
  
export default questionsAndGrammarWords;
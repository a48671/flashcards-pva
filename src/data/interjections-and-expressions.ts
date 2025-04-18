import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const interjectionsAndExpressions: Record<FlashcardId, IFlashcard> = {
  hello: { id: 'hello', nativeText: 'привет', targetText: 'hello', image: 'hello.png', setId: 'interjections-and-expressions' },
  hi: { id: 'hi', nativeText: 'привет', targetText: 'hi', image: 'hi.png', setId: 'interjections-and-expressions' },
  bye: { id: 'bye', nativeText: 'пока', targetText: 'bye', image: 'bye.png', setId: 'interjections-and-expressions' },
  goodbye: { id: 'goodbye', nativeText: 'до свидания', targetText: 'goodbye', image: 'goodbye.png', setId: 'interjections-and-expressions' },
  thanks: { id: 'thanks', nativeText: 'спасибо', targetText: 'thanks', image: 'thanks.png', setId: 'interjections-and-expressions' },
  'thank you': { id: 'thank-you', nativeText: 'спасибо', targetText: 'thank you', image: 'thank-you.png', setId: 'interjections-and-expressions' },
  oh: { id: 'oh', nativeText: 'о!', targetText: 'oh', image: 'oh.png', setId: 'interjections-and-expressions' },
  'oh dear': { id: 'oh-dear', nativeText: 'ой!', targetText: 'oh dear', image: 'oh-dear.png', setId: 'interjections-and-expressions' },
  wow: { id: 'wow', nativeText: 'вау!', targetText: 'wow', image: 'wow.png', setId: 'interjections-and-expressions' },
  hooray: { id: 'hooray', nativeText: 'ура!', targetText: 'hooray', image: 'hooray.png', setId: 'interjections-and-expressions' },
  'well done': { id: 'well-done', nativeText: 'молодец / отлично', targetText: 'well done', image: 'well-done.png', setId: 'interjections-and-expressions' },
  pardon: { id: 'pardon', nativeText: 'простите', targetText: 'pardon', image: 'pardon.png', setId: 'interjections-and-expressions' },
  sorry: { id: 'sorry', nativeText: 'извините', targetText: 'sorry', image: 'sorry.png', setId: 'interjections-and-expressions' },
  'don’t worry': { id: 'dont-worry', nativeText: 'не переживай', targetText: 'don’t worry', image: 'dont-worry.png', setId: 'interjections-and-expressions' },
  'me too': { id: 'me-too', nativeText: 'я тоже', targetText: 'me too', image: 'me-too.png', setId: 'interjections-and-expressions' },
  OK: { id: 'ok', nativeText: 'окей / хорошо', targetText: 'OK', image: 'ok.png', setId: 'interjections-and-expressions' },
};
  
export default interjectionsAndExpressions;
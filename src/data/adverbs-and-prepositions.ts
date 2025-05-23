import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const adverbsAndPrepositions: Record<FlashcardId, IFlashcard> = {
  here: { id: 'here', nativeText: 'здесь', targetText: 'here', image: 'here.png', setId: 'adverbs-and-prepositions' },
  there: { id: 'there', nativeText: 'там', targetText: 'there', image: 'there.png', setId: 'adverbs-and-prepositions' },
  now: { id: 'now', nativeText: 'сейчас', targetText: 'now', image: 'now.png', setId: 'adverbs-and-prepositions' },
  again: { id: 'again', nativeText: 'снова', targetText: 'again', image: 'again.png', setId: 'adverbs-and-prepositions' },
  really: { id: 'really', nativeText: 'действительно', targetText: 'really', image: 'really.png', setId: 'adverbs-and-prepositions' },
  very: { id: 'very', nativeText: 'очень', targetText: 'very', image: 'very.png', setId: 'adverbs-and-prepositions' },
  too: { id: 'too', nativeText: 'тоже / слишком', targetText: 'too', image: 'too.png', setId: 'adverbs-and-prepositions' },
  'a lot': { id: 'a-lot', nativeText: 'много', targetText: 'a lot', image: 'a-lot.png', setId: 'adverbs-and-prepositions' },
  about: { id: 'about', nativeText: 'о / около', targetText: 'about', image: 'about.png', setId: 'adverbs-and-prepositions' },
  
  at: { id: 'at', nativeText: 'в / у', targetText: 'at', image: 'at.png', setId: 'adverbs-and-prepositions' },
  on: { id: 'on', nativeText: 'на', targetText: 'on', image: 'on.png', setId: 'adverbs-and-prepositions' },
  in: { id: 'in', nativeText: 'в', targetText: 'in', image: 'in.png', setId: 'adverbs-and-prepositions' },
  under: { id: 'under', nativeText: 'под', targetText: 'under', image: 'under.png', setId: 'adverbs-and-prepositions' },
  over: { id: 'over', nativeText: 'над', targetText: 'over', image: 'over.png', setId: 'adverbs-and-prepositions' },
  behind: { id: 'behind', nativeText: 'позади', targetText: 'behind', image: 'behind.png', setId: 'adverbs-and-prepositions' },
  'next to': { id: 'next-to', nativeText: 'рядом с', targetText: 'next to', image: 'next-to.png', setId: 'adverbs-and-prepositions' },
  between: { id: 'between', nativeText: 'между', targetText: 'between', image: 'between.png', setId: 'adverbs-and-prepositions' },
  'in front of': { id: 'in-front-of', nativeText: 'перед', targetText: 'in front of', image: 'in-front-of.png', setId: 'adverbs-and-prepositions' },
  with: { id: 'with', nativeText: 'с', targetText: 'with', image: 'with.png', setId: 'adverbs-and-prepositions' },
  from: { id: 'from', nativeText: 'от / из', targetText: 'from', image: 'from.png', setId: 'adverbs-and-prepositions' },
  of: { id: 'of', nativeText: 'из / от / о', targetText: 'of', image: 'of.png', setId: 'adverbs-and-prepositions' },
  to: { id: 'to', nativeText: 'в / к / на', targetText: 'to', image: 'to.png', setId: 'adverbs-and-prepositions' },
  for: { id: 'for', nativeText: 'для', targetText: 'for', image: 'for.png', setId: 'adverbs-and-prepositions' },
};
  
export default adverbsAndPrepositions;
import { FlashcardSetId, ISet } from '@/domain/set';

export const sets: Record<FlashcardSetId, ISet> = {
  'fruits-and-vegetables': { id: 'fruits-and-vegetables', title: 'Fruits and Vegetables' },
  'people-relationships': { id: 'people-relationships', title: 'People & Relationships' },
  'animals': { id: 'animals',  title: 'Animals' },
  'food-and-drink': { id: 'food-and-drink', title: 'Food & Drink' },
  'clothing': { id: 'clothing', title: 'Clothing' },
  'colors': { id: 'colors',  title: 'Colors' },
  'home-and-furniture': { id: 'home-and-furniture', title: 'Home & Furniture' },
  'school-and-learning': {  id: 'school-and-learning', title: 'School & Learning' },
  'toys-and-games': { id: 'toys-and-games',  title: 'Toys & Games' },
  'sports-and-activities': { id: 'sports-and-activities', title: 'Sports & Activities' },
  'verbs-actions': { id: 'verbs-actions', title: 'Verbs (Actions)' },
  'nature-and-environment': { id: 'nature-and-environment', title: 'Nature & Environment' },
  'objects-and-things': { id: 'objects-and-things', title: 'Objects & Things' },
  'transport': { id: 'transport', title: 'Transport' },
  'places': { id: 'places', title: 'Places' },
  'body-parts': { id: 'body-parts', title: 'Body Parts' },
  'pronouns-and-determiners': { id: 'pronouns-and-determiners', title: 'Pronouns & Determiners' },
  'adjectives': { id: 'adjectives', title: 'Adjectives' },
  'adverbs-and-prepositions': { id: 'adverbs-and-prepositions', title: 'Adverbs & Prepositions' },
  'interjections-and-expressions': { id: 'interjections-and-expressions', title: 'Interjections & Expressions' },
  'questions-and-grammar-words': { id: 'questions-and-grammar-words', title: 'Questions & Grammar Words' },
  'a-2.1': { id: 'a-2.1', title: 'A2 - 1' },
  'a-2.2': { id: 'a-2.2', title: 'A2 - 2' }
};

export default sets;

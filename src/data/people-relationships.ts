import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const peopleRelationships: Record<FlashcardId, IFlashcard> = {
  'dad': { id: 'dad', nativeText: 'папа', targetText: 'dad', image: 'dad.png', setId: 'people-relationships' },
  'mum': { id: 'mum', nativeText: 'мама', targetText: 'mum', image: 'mum.png', setId: 'people-relationships' },
  'father': { id: 'father', nativeText: 'отец', targetText: 'father', image: 'father.png', setId: 'people-relationships' },
  'mother': { id: 'mother', nativeText: 'мать', targetText: 'mother', image: 'mother.png', setId: 'people-relationships' },
  'grandfather': { id: 'grandfather', nativeText: 'дедушка', targetText: 'grandfather', image: 'grandfather.png', setId: 'people-relationships' },
  'grandma': { id: 'grandma', nativeText: 'бабушка', targetText: 'grandma', image: 'grandma.png', setId: 'people-relationships' },
  'grandmother': { id: 'grandmother', nativeText: 'бабушка', targetText: 'grandmother', image: 'grandmother.png', setId: 'people-relationships' },
  'grandpa': { id: 'grandpa', nativeText: 'дедушка', targetText: 'grandpa', image: 'grandpa.png', setId: 'people-relationships' },
  'brother': { id: 'brother', nativeText: 'брат', targetText: 'brother', image: 'brother.png', setId: 'people-relationships' },
  'sister': { id: 'sister', nativeText: 'сестра', targetText: 'sister', image: 'sister.png', setId: 'people-relationships' },
  'cousin': { id: 'cousin', nativeText: 'двоюродный брат / сестра', targetText: 'cousin', image: 'cousin.png', setId: 'people-relationships' },
  'friend': { id: 'friend', nativeText: 'друг', targetText: 'friend', image: 'friend.png', setId: 'people-relationships' },
  'classmate': { id: 'classmate', nativeText: 'одноклассник', targetText: 'classmate', image: 'classmate.png', setId: 'people-relationships' },
  'man': { id: 'man', nativeText: 'мужчина', targetText: 'man', image: 'man.png', setId: 'people-relationships' },
  'men': { id: 'men', nativeText: 'мужчины', targetText: 'men', image: 'men.png', setId: 'people-relationships' },
  'woman': { id: 'woman', nativeText: 'женщина', targetText: 'woman', image: 'woman.png', setId: 'people-relationships' },
  'women': { id: 'women', nativeText: 'женщины', targetText: 'women', image: 'women.png', setId: 'people-relationships' },
  'person': { id: 'person', nativeText: 'человек', targetText: 'person', image: 'person.png', setId: 'people-relationships' },
  'people': { id: 'people', nativeText: 'люди', targetText: 'people', image: 'people.png', setId: 'people-relationships' },
  'child': { id: 'child', nativeText: 'ребёнок', targetText: 'child', image: 'child.png', setId: 'people-relationships' },
  'children': { id: 'children', nativeText: 'дети', targetText: 'children', image: 'children.png', setId: 'people-relationships' },
  'kid': { id: 'kid', nativeText: 'ребёнок', targetText: 'kid', image: 'kid.png', setId: 'people-relationships' },
  'mr': { id: 'mr', nativeText: 'мистер', targetText: 'Mr', image: 'mr.png', setId: 'people-relationships' },
  'mrs': { id: 'mrs', nativeText: 'миссис', targetText: 'Mrs', image: 'mrs.png', setId: 'people-relationships' },
  'miss': { id: 'miss', nativeText: 'мисс', targetText: 'Miss', image: 'miss.png', setId: 'people-relationships' },
};

export default peopleRelationships;

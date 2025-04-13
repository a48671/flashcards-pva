import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const places: Record<FlashcardId, IFlashcard> = {
  zoo: {
    id: 'zoo',
    nativeText: 'зоопарк',
    targetText: 'zoo',
    image: 'zoo.png',
    setId: 'places',
  },
  park: {
    id: 'park',
    nativeText: 'парк',
    targetText: 'park',
    image: 'park.png',
    setId: 'places',
  },
  street: {
    id: 'street',
    nativeText: 'улица',
    targetText: 'street',
    image: 'street.png',
    setId: 'places',
  },
  shop: {
    id: 'shop',
    nativeText: 'магазин',
    targetText: 'shop',
    image: 'shop.png',
    setId: 'places',
  },
  store: {
    id: 'store',
    nativeText: 'магазин',
    targetText: 'store',
    image: 'store.png',
    setId: 'places',
  },
  bookshop: {
    id: 'bookshop',
    nativeText: 'книжный магазин',
    targetText: 'bookshop',
    image: 'bookshop.png',
    setId: 'places',
  },
  playground: {
    id: 'playground',
    nativeText: 'детская площадка',
    targetText: 'playground',
    image: 'playground.png',
    setId: 'places',
  },
};
  
export default places;
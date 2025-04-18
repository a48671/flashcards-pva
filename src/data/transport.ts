import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const transport: Record<FlashcardId, IFlashcard> = {
  car: {
    id: 'car',
    nativeText: 'машина',
    targetText: 'car',
    image: 'car.png',
    setId: 'transport',
  },
  bus: {
    id: 'bus',
    nativeText: 'автобус',
    targetText: 'bus',
    image: 'bus.png',
    setId: 'transport',
  },
  train: {
    id: 'train',
    nativeText: 'поезд',
    targetText: 'train',
    image: 'train.png',
    setId: 'transport',
  },
  truck: {
    id: 'truck',
    nativeText: 'грузовик',
    targetText: 'truck',
    image: 'truck.png',
    setId: 'transport',
  },
  lorry: {
    id: 'lorry',
    nativeText: 'грузовик',
    targetText: 'lorry',
    image: 'lorry.png',
    setId: 'transport',
  },
  boat: {
    id: 'boat',
    nativeText: 'лодка',
    targetText: 'boat',
    image: 'boat.png',
    setId: 'transport',
  },
  ship: {
    id: 'ship',
    nativeText: 'корабль',
    targetText: 'ship',
    image: 'ship.png',
    setId: 'transport',
  },
  plane: {
    id: 'plane',
    nativeText: 'самолёт',
    targetText: 'plane',
    image: 'plane.png',
    setId: 'transport',
  },
  motorbike: {
    id: 'motorbike',
    nativeText: 'мотоцикл',
    targetText: 'motorbike',
    image: 'motorbike.png',
    setId: 'transport',
  },
  bicycle: {
    id: 'bicycle',
    nativeText: 'велосипед',
    targetText: 'bicycle',
    image: 'bicycle.png',
    setId: 'transport',
  },
  helicopter: {
    id: 'helicopter',
    nativeText: 'вертолёт',
    targetText: 'helicopter',
    image: 'helicopter.png',
    setId: 'transport',
  },
};
  
export default transport;
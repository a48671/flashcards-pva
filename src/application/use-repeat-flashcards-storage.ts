import { useCallback } from 'react';
import { IRepeatStorage } from '@/domain/ports/repeat-storage';
import { RepeatStorage } from '@/infrastructure/storage/repeat-storage';
import { FlashcardId } from '@/domain/flashcard';
import { FlashcardSetId } from '@/domain/set';

const storage: IRepeatStorage = new RepeatStorage();

export function useRepeatFlashcardsStorage() {
  const getAllCards = useCallback(() => storage.getAllCards(), []);
  const getBySetId = useCallback((setId: FlashcardSetId) => storage.getBySetId(setId), []);
  const add = useCallback((setId: FlashcardSetId, cardId: FlashcardId) => storage.add(setId, cardId), []);
  const remove = useCallback((setId: FlashcardSetId, cardId: FlashcardId) => storage.remove(setId, cardId), []);
  const getAllSets = useCallback(() => storage.getAllSets(), []);

  return { getAllCards, getBySetId, add, remove, getAllSets };
}

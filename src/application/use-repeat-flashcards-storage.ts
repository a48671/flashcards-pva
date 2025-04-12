import { useCallback } from "react";
import { IRepeatStorage } from "@/domain/ports/repeat-storage";
import { RepeatStorage } from "@/infrastructure/storage/repeat-storage";
import { FlashcardId } from "@/domain/flashcard";
import { FlashcardSetId } from "@/domain/constants/flashcard-set-id";

const storage: IRepeatStorage = new RepeatStorage();

export function useRepeatFlashcardsStorage() {
  const getAll = useCallback(() => storage.getAll(), []);
  const getBySetId = useCallback((setId: FlashcardSetId) => storage.getBySetId(setId), []);
  const add = useCallback((setId: FlashcardSetId, cardId: FlashcardId) => storage.add(setId, cardId), []);
  const remove = useCallback((setId: FlashcardSetId, cardId: FlashcardId) => storage.remove(setId, cardId), []);

  return { getAll, getBySetId, add, remove };
}

import { FlashcardSetId } from '@/domain/set';
import { FlashcardId, IFlashcard } from '@/domain/flashcard';
import { IFlashcardsRepository } from '@/domain/ports/flashcards-repository';
import { FlashcardsRepository } from '@/infrastructure/repositories/flashcards-repository';
import { useCallback } from 'react';

const repository = new FlashcardsRepository();

export function useFlashcardsRepository(): IFlashcardsRepository {
  const getBySetId = useCallback((setId: FlashcardSetId): Promise<IFlashcard[]> => {
    return repository.getBySetId(setId);
  }, []);

  const getCard = useCallback((setId: FlashcardSetId, cardId: FlashcardId): Promise<IFlashcard | undefined> => {
    return repository.getCard(setId, cardId);
  }, []);

  return { getBySetId, getCard };
}

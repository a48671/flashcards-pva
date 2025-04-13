import { FlashcardSetId } from '../constants/flashcard-set-id';
import { FlashcardId, IFlashcard } from '../flashcard';

export interface IFlashcardsRepository {
    getBySetId(setId: FlashcardSetId): Promise<IFlashcard[]>;
    getCard(setId:FlashcardSetId, cardId: FlashcardId): Promise<IFlashcard | undefined>;
}

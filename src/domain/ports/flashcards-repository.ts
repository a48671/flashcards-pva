import { FlashcardId, IFlashcard } from '../flashcard';
import { FlashcardSetId } from '../set';

export interface IFlashcardsRepository {
    getBySetId(setId: FlashcardSetId): Promise<IFlashcard[]>;
    getCard(setId:FlashcardSetId, cardId: FlashcardId): Promise<IFlashcard | undefined>;
}

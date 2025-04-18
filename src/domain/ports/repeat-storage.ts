import { FlashcardSetId } from '../set';
import { FlashcardId } from '../flashcard';

export interface RepeatedFlashcardData { setId: FlashcardSetId, flashcardId: FlashcardId }

export interface IRepeatStorage {
    getAllSets(): { setId: FlashcardSetId, flashcardIds: FlashcardId[] }[];
    getAllCards(): RepeatedFlashcardData[];
    getBySetId(setId: FlashcardSetId): RepeatedFlashcardData[];
    add(setId: FlashcardSetId, flashcardId: FlashcardId): void;
    remove(setId: FlashcardSetId, flashcardId: FlashcardId): void;
}

import { FlashcardSetId } from '../set';
import { FlashcardId } from '../flashcard';

export type RepeatStorageModel = Partial<Record<FlashcardSetId, FlashcardId[]>>;

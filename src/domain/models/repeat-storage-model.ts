import { FlashcardSetId } from "../constants/flashcard-set-id";
import { FlashcardId } from "../flashcard";

export type RepeatStorageModel = Partial<Record<FlashcardSetId, FlashcardId[]>>;

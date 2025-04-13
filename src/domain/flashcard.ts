import { FlashcardSetId } from './constants/flashcard-set-id';

export type FlashcardId = string;

export interface IFlashcard {
    id: FlashcardId;
    nativeText: string;
    targetText: string;
    image?: string;
    audio?: string;
    setId?: FlashcardSetId;
}
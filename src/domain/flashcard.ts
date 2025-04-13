import { FlashcardSetId } from './set';

export type FlashcardId = string;

export interface IFlashcard {
    id: FlashcardId;
    nativeText: string;
    targetText: string;
    image?: string;
    audio?: string;
    setId?: FlashcardSetId;
}
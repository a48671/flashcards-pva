import { FlashcardSetId, ISet } from '../set';

export interface ISetsRepository {
    getSets(): Promise<Record<FlashcardSetId, ISet>>;
}

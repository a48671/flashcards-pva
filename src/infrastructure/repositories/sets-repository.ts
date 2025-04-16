import { ISetsRepository } from '@/domain/ports/sets-repository';
import { FlashcardSetId, ISet } from '@/domain/set';

export class SetsRepository implements ISetsRepository {
  public async getSets(): Promise<Record<FlashcardSetId, ISet>> {
    return (await import('@/data/sets')).default;
  }
}

import { FlashcardId, IFlashcard } from '@/domain/flashcard';
import { IFlashcardsRepository } from '@/domain/ports/flashcards-repository';
import { FlashcardSetId } from '@/domain/set';

export class FlashcardsRepository implements IFlashcardsRepository {
  async getBySetId(setId: FlashcardSetId): Promise<IFlashcard[]> {
    const set = await this._getSet(setId);

    if (!set) {
      throw new Error(`Flashcard data for set "${setId}" is invalid or not found.`);
    }

    return Object.values(set);
  }

  async getCard(setId:FlashcardSetId, cardId: FlashcardId): Promise<IFlashcard | undefined> {
    try {
      const set = await this._getSet(setId);

      return set[cardId];
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

  private async _getSet(setId: FlashcardSetId): Promise<Record<FlashcardId, IFlashcard>> {
    return (await import(`@/data/${setId}.ts`))?.default;
  }
}

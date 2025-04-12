import { FlashcardSetId } from '@/domain/constants/flashcard-set-id';
import { FlashcardId, IFlashcard } from '@/domain/flashcard';
import { IFlashcardsRepository } from '@/domain/ports/flashcards-repository';

export class FlashcardsRepository implements IFlashcardsRepository {
    async getBySetId(setId: FlashcardSetId): Promise<IFlashcard[]> {
      const result = (await import(`@/data/${setId}.ts`))?.default;

      if (!Array.isArray(result)) {
        throw new Error(`Flashcard data for set "${setId}" is invalid or not found.`);
      }

      return result;
    }

    async getCard(setId:FlashcardSetId, cardId: FlashcardId): Promise<IFlashcard | undefined> {
      try {
        const cards = await this.getBySetId(setId);
        return cards.find(card => card.id === cardId);
      } catch (err) {
        console.error(err);
        return undefined;
      }
    }
}

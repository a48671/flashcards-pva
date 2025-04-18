import { FlashcardSetId } from '@/domain/set';
import { FlashcardId } from '@/domain/flashcard';
import { RepeatStorageModel } from '@/domain/models/repeat-storage-model';
import { IRepeatStorage, RepeatedFlashcardData } from '@/domain/ports/repeat-storage';

const STORAGE_KEY = 'repeat-flashcards';

export class RepeatStorage implements IRepeatStorage {
  public getAllCards(): RepeatedFlashcardData[] {
    const groupedBySetId = this._getData();    

    return (Object.keys(groupedBySetId) as FlashcardSetId[])
      .reduce<RepeatedFlashcardData[]>((acc, setId) => {
        const withSetIds = groupedBySetId[setId]?.map((flashcardId) => ({ flashcardId, setId })) || [];
        return [
          ...acc,
          ...withSetIds
        ];
      }, []);
  }

  public getAllSets(): { setId: FlashcardSetId, flashcardIds: FlashcardId[] }[] {
    const data = this._getData();

    return Object.keys(data).reduce<{ setId: FlashcardSetId, flashcardIds: FlashcardId[] }[]>((result, setId) => {
      const flashcardIds = data[setId];
      if (!flashcardIds?.length) {
        return result;
      }
      result.push({ setId, flashcardIds });

      return result;
    }, []);
  }

  public getBySetId(setId: FlashcardSetId): RepeatedFlashcardData[] {
    const data = this._getData();
    return data[setId]?.map(flashcardId => ({ flashcardId, setId })) ?? [];
  }

  public add(setId: FlashcardSetId, flashcardId: FlashcardId) {
    const data = this._getData();
    const existing = new Set(data[setId] ?? []);
    existing.add(flashcardId);
    data[setId] = Array.from(existing);
    this._save(data);
  }

  public remove(setId: FlashcardSetId, flashcardId: FlashcardId) {
    const data = this._getData();
    const filtered = (data[setId] ?? []).filter((id) => id !== flashcardId);
    if (filtered.length > 0) {
      data[setId] = filtered;
    } else {
      delete data[setId];
    }
    this._save(data);
  }

  private _save(data: RepeatStorageModel) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  private _getData(): RepeatStorageModel {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    try {
      return JSON.parse(raw) as RepeatStorageModel;
    } catch {
      return {};
    }
  }
}

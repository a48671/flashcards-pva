import { useRepeatFlashcardsStorage } from '@/application/use-repeat-flashcards-storage';
import { useSetsRepository } from '@/application/use-sets-repository';
import { FlashcardSetId, ISet } from '@/domain/set';
import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import {
  BookOpenIcon,
  ClipboardDocumentListIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { FlashcardId, IFlashcard } from '@/domain/flashcard';
import { useFlashcardsRepository } from '@/application/use-flashcards-repository';
import Flashcard from '@/presentation/components/flashcard';
import { CheckoutCardsButtons } from '@/presentation/components/checkout-cards-buttons';
  
function RepeatingListPage(): ReactElement {
  const [setsForRepeating, setSetsForRepeating] = useState<{ setId: FlashcardSetId; flashcardIds: FlashcardId[] }[]>([]);
  const [sets, setSets] = useState<Record<FlashcardSetId, ISet>>({});
  const [chosenSets, setChosenSets] = useState<{ setId: FlashcardSetId; flashcardIds: FlashcardId[] }[]>([]);
  const [card, setCard] = useState<IFlashcard | undefined>();

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const [isRepeatingStarted, setIsRepeatingStarted] = useState(false);
  
  const { getAllSets, remove } = useRepeatFlashcardsStorage();
  const { getSets } = useSetsRepository();
  const { getCard } = useFlashcardsRepository();

  const getCardByIndex = useCallback(async function getCardByIndex(setId: FlashcardSetId, flashcardId: FlashcardId): Promise<void> {
    try {
      const card = await getCard(setId, flashcardId);
      setCard(card);
    } catch {
      setCard(undefined);
    }
  }, [getCard]);

  const cardsForRepeating = useMemo(() => {
    return chosenSets.flatMap(({ setId, flashcardIds }) => flashcardIds.map((flashcardId) => ({ flashcardId, setId })));
  }, [chosenSets]);

  const handleNext = () => {
    if (flipped) {
      setFlipped(false);
      setTimeout(() => setIndex((prev) => (prev < cardsForRepeating.length - 1 ? prev + 1 : prev)), 500);
    } else {
      setIndex((prev) => (prev < cardsForRepeating.length - 1 ? prev + 1 : prev));
    }
  };
      
  const handlePrev = () => {
    if (flipped) {
      setFlipped(false);
      setTimeout(() => setIndex((prev) => (prev > 0 ? prev - 1 : prev)), 500);
    } else {
      setIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const fetchAllSets = useCallback(() => {
    const setsForRepeating = getAllSets();
    setSetsForRepeating(setsForRepeating);
  
    async function fetchSetsData() {
      const setsData = await getSets();
      setSets(setsData);
    }
  
    fetchSetsData();
  }, [getAllSets, getSets]);
  
  useEffect(() => {
    fetchAllSets();
  }, [fetchAllSets]);

  const { setId, flashcardId } = cardsForRepeating[index] ?? {};

  useEffect(() => {
    if (!setId || !flashcardId) return;

    getCardByIndex(setId, flashcardId);
  }, [index, getCardByIndex, setId, flashcardId]);
  
  const toggleSet = (set: { setId: FlashcardSetId; flashcardIds: FlashcardId[] }) => {
    setChosenSets(prev =>
      prev.some(({ setId }) => set.setId === setId)
        ? prev.filter(({ setId }) => set.setId !== setId)
        : [...prev, set]
    );
  };
  
  const startRepeating = () => {
    setIsRepeatingStarted(true);
  };

  if (isRepeatingStarted) {
    return (
      <div className="p-4 flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-bold">Repeating</h1>
        { card
          ?  <Flashcard
            flipped={ flipped }
            card={card}
            onClick={ () => setFlipped((prev) => !prev) }
          />
          : <p className="text-center text-gray-500 text-lg mt-8">
                    This flashcard had not been found
          </p>
        }

        <CheckoutCardsButtons
          onPrev={ handlePrev }
          onNext={ handleNext }
          hasPrev={ index !== 0 }
          hasNext={ index < cardsForRepeating.length - 1 }
          toggleRepeat={ () => {
            remove(setId, flashcardId);
            setChosenSets((prev) => prev.filter((set) =>  set.setId !== setId));
            fetchAllSets();
          } }
          isRepeating
        />     
        <button
          onClick={() => setIsRepeatingStarted(false)}
          disabled={chosenSets.length === 0}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-lg font-semibold transition
            ${chosenSets.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          <ArrowPathIcon className="h-6 w-6" />
          Return to Chose Sets
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-gray-800">
        <ClipboardDocumentListIcon className="h-7 w-7 text-blue-600" />
          Choose Sets to Repeat
      </h1>
      <ul className="space-y-4 mb-6">
        {setsForRepeating.map(set => (
          <li key={set.setId} className="flex items-center bg-white rounded-xl shadow px-4 py-3">
            <label className="flex items-center justify-between w-full cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={chosenSets.includes(set)}
                  onChange={() => toggleSet(set)}
                  className="w-5 h-5 accent-blue-600"
                />
                <BookOpenIcon className="h-6 w-6 text-blue-500" />
                <span className="text-lg text-gray-800">{sets[set.setId]?.title}</span>
              </div>
              <span className="text-sm text-gray-500">
                {set.flashcardIds.length} cards
              </span>
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={startRepeating}
        disabled={chosenSets.length === 0}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-lg font-semibold transition
            ${chosenSets.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        <ArrowPathIcon className="h-6 w-6" />
          Start Repeat Chosen Sets
      </button>
    </div>
  );
}

export default RepeatingListPage;

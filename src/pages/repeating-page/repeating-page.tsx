import { useFlashcardsRepository } from '@/application/use-flashcards-repository';
import { useRepeatFlashcardsStorage } from '@/application/use-repeat-flashcards-storage';
import { FlashcardSetId } from '@/domain/set';
import { FlashcardId, IFlashcard } from '@/domain/flashcard';
import { RepeatedFlashcardData } from '@/domain/ports/repeat-storage';
import { CheckoutCardsButtons } from '@/presentation/components/checkout-cards-buttons';
import Flashcard from '@/presentation/components/flashcard';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RepeatingPage() {
  const { setId: setIdFromUrl } = useParams<{ setId: FlashcardSetId }>();
 
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const [cardsForRepeating, setCardsForRepeating] = useState<RepeatedFlashcardData[]>([]);
  const [card, setCard] = useState<IFlashcard | undefined>();

  const { getCard } = useFlashcardsRepository();
  const { getAll, getBySetId, remove } = useRepeatFlashcardsStorage();

  const cardForRepeating = cardsForRepeating[index];
  const setId = cardForRepeating?.setId;
  const flashcardId = cardForRepeating?.flashcardId;

  const getCardByIndex = useCallback(async function getCardByIndex(setId: FlashcardSetId, flashcardId: FlashcardId): Promise<void> {
    try {
      const card = await getCard(setId, flashcardId);
      setCard(card);
    } catch {
      setCard(undefined);
    }
  }, [getCard]);

  const getAllCardsForRepeating = useCallback(() => {
    const allForRepeating = getAll();
    setCardsForRepeating(allForRepeating);
  }, [getAll]);

  const getCardsForRepeatingBySetId = useCallback((setId: FlashcardSetId) => {
    const cardsForRepeating = getBySetId(setId);
    setCardsForRepeating(cardsForRepeating);
  }, [getBySetId]);

  const getCardsForRepeating = useCallback(() => {
    if (setIdFromUrl) {
      getCardsForRepeatingBySetId(setIdFromUrl);
    } else {
      getAllCardsForRepeating();
    }
  }, [getAllCardsForRepeating, getCardsForRepeatingBySetId, setIdFromUrl]);

  useEffect(() => {
    getCardsForRepeating();
  }, [getCardsForRepeating]);

  useEffect(() => {
    if (!setId || !flashcardId) return;

    getCardByIndex(setId, flashcardId);
  }, [index, setId, flashcardId, getCardByIndex]);
  
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
  
  if (cardsForRepeating.length === 0) {
    return <div className="p-4">No flashcards found for repeating.</div>;
  }

  if (cardsForRepeating.length === 0) {
    return (
      <div className="p-4 flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-bold">Repeating</h1>
        <p className="text-center text-gray-500 text-lg mt-8">
                    There are no flashcards available.
        </p>
      </div>
    );
  }
  
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
        toggleRepeat={ () => { remove(setId, flashcardId); getCardsForRepeating(); } }
        isRepeating
      />     
    </div>
  );
}

export default RepeatingPage;

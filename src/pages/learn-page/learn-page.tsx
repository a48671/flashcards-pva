import { useParams } from 'react-router-dom';
import Flashcard from '../../presentation/components/flashcard';
import { useEffect, useState } from 'react';
import { useRepeatFlashcardsStorage } from '../../application/use-repeat-flashcards-storage';
import { FlashcardSetId } from '../../domain/constants/flashcard-set-id';
import { useGetFlashcards } from './hooks/use-get-flashcards';
import { CheckoutCardsButtons } from '@/presentation/components/checkout-cards-buttons';
import { FlashcardId } from '@/domain/flashcard';

const LearnPage = () => {
    const { setId } = useParams<{ setId: FlashcardSetId }>();
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [repeatingFlashcardIds, setRepeatingFlashcardIds] = useState<FlashcardId[]>([]);

    const [ cards ] = useGetFlashcards(setId);
    const { add, getBySetId } = useRepeatFlashcardsStorage();

    useEffect(() => {
      if (!setId) {
        return;
      }

      const repeatingFlashcardIdsFromStore = getBySetId(setId);

      setRepeatingFlashcardIds(repeatingFlashcardIdsFromStore);
    }, [getBySetId]);
  
    const handleNext = () => {
        if (flipped) {
            setFlipped(false);
            setTimeout(() => setIndex((prev) => (prev < cards.length - 1 ? prev + 1 : prev)), 500);
        } else {
            setIndex((prev) => (prev < cards.length - 1 ? prev + 1 : prev));
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
  
    if (cards.length === 0) {
      return <div className="p-4">No flashcards found for this set.</div>;
    }
  
    const currentCard = cards[index];

    const isCardAlreadyAddedToRepeating = repeatingFlashcardIds.some(id => currentCard.id === id);

    if (!setId || cards.length === 0) {
        return (
            <div className="p-4 flex flex-col items-center space-y-6">
                <h1 className="text-2xl font-bold">{setId}</h1>
                <p className="text-center text-gray-500 text-lg mt-8">
                    There are no flashcards available.
                </p>
            </div>
        );
    }
  
    return (
      <div className="p-4 flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-bold">{setId}</h1>
        <Flashcard
            flipped={ flipped }
            card={currentCard}
            onClick={ () => setFlipped((prev) => !prev) }
        />
        <CheckoutCardsButtons
          onPrev={ handlePrev }
          onNext={ handleNext }
          hasPrev={ index !== 0 }
          hasNext={ index < cards.length - 1 }
          toggleRepeat={ isCardAlreadyAddedToRepeating ? undefined : () => { add(setId, currentCard.id); setRepeatingFlashcardIds(prev => [...prev, currentCard.id]) } }
        />
      </div>
    );
  };
  
  export default LearnPage;

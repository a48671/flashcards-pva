import { useFlashcardsRepository } from "@/application/use-flashcards-repository";
import { FlashcardSetId } from "@/domain/constants/flashcard-set-id";
import { IFlashcard } from "@/domain/flashcard";
import { useEffect, useState } from "react";

export function useGetFlashcards(setId: FlashcardSetId | undefined): [IFlashcard[]] {
    const [cards, setCards] = useState<IFlashcard[]>([]);

    const { getBySetId } = useFlashcardsRepository();
      
    useEffect(() => {
        async function getFlashcards(setId: FlashcardSetId) {
            try {
                const flashcards = await getBySetId(setId);
                setCards(flashcards);
            } catch(err) {
                console.error(err)
            }
        }
        if (setId) {
            getFlashcards(setId);
        }
    }, [setId, getBySetId]);

    return [cards];
}

import { useRepeatFlashcardsStorage } from '@/application/use-repeat-flashcards-storage';
import { useSetsRepository } from '@/application/use-sets-repository';
import { FlashcardSetId, ISet } from '@/domain/set';
import { ReactElement, useEffect, useState } from 'react';
import {
  BookOpenIcon,
  ClipboardDocumentListIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
  
function RepeatingListPage(): ReactElement {
  const [setsForRepeating, setSetsForRepeating] = useState<FlashcardSetId[]>([]);
  const [sets, setSets] = useState<Record<FlashcardSetId, ISet>>({});
  const [chosenSetsIds, setChosenSetsIds] = useState<FlashcardSetId[]>([]);
  
  const { getAllSetIs } = useRepeatFlashcardsStorage();
  const { getSets } = useSetsRepository();
  
  useEffect(() => {
    const setsIds = getAllSetIs();
    setSetsForRepeating(setsIds);
  
    async function fetchSetsData() {
      const setsData = await getSets();
      setSets(setsData);
    }
  
    fetchSetsData();
  }, [getAllSetIs, getSets]);
  
  const toggleSet = (setId: FlashcardSetId) => {
    setChosenSetsIds(prev =>
      prev.includes(setId)
        ? prev.filter(id => id !== setId)
        : [...prev, setId]
    );
  };
  
  const startRepeating = () => {
    console.log('Start repeating sets:', chosenSetsIds);
  };
  
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-gray-800">
        <ClipboardDocumentListIcon className="h-7 w-7 text-blue-600" />
          Choose Sets to Repeat
      </h1>
      <ul className="space-y-4 mb-6">
        {setsForRepeating.map(setId => (
          <li key={setId} className="flex items-center bg-white rounded-xl shadow px-4 py-3">
            <label className="flex items-center gap-3 w-full cursor-pointer">
              <input
                type="checkbox"
                checked={chosenSetsIds.includes(setId)}
                onChange={() => toggleSet(setId)}
                className="w-5 h-5 accent-blue-600"
              />
              <BookOpenIcon className="h-6 w-6 text-blue-500" />
              <span className="text-lg text-gray-800">{sets[setId]?.title}</span>
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={startRepeating}
        disabled={chosenSetsIds.length === 0}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-lg font-semibold transition
            ${chosenSetsIds.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        <ArrowPathIcon className="h-6 w-6" />
          Start Repeat Chosen Sets
      </button>
    </div>
  );
}

export default RepeatingListPage;

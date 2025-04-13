import { ChevronLeftIcon, ChevronRightIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { PropsWithChildren } from 'react';

interface CheckoutCardsButtonsProps extends PropsWithChildren {
    onPrev: () => void;
    onNext: () => void;
    hasPrev: boolean;
    hasNext: boolean;
    isRepeating?: boolean;
    toggleRepeat?: () => void;
}
  
export function CheckoutCardsButtons({ onPrev, onNext, hasPrev, hasNext, isRepeating, toggleRepeat }: CheckoutCardsButtonsProps) {
    return (
        <div className="flex justify-between items-center w-full mt-6 px-4 gap-2">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm ${
            hasPrev ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ChevronLeftIcon className="w-5 h-5" />
          Prev
        </button>
  
        <button
            disabled={ !toggleRepeat }
            onClick={toggleRepeat}
            className={ `flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm bg-white text-blue-600 hover:bg-blue-50 ${
                toggleRepeat ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}` }
        >
          {isRepeating ? (
            <>
              <XCircleIcon className="w-5 h-5" />
              Remove
            </>
          ) : (
            <>
              <PlusCircleIcon className="w-5 h-5" />
              Add
            </>
          )}
        </button>
  
        <button
          onClick={ onNext }
          disabled={ !hasNext }
          className={`flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm ${
            hasNext ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    );
}
import { useLayoutEffect, useRef, useState } from 'react';
import { IFlashcard } from '../../domain/flashcard';
import { SpeakerWaveIcon } from '@heroicons/react/16/solid'; // use SpeakerWaveIcon for play

interface Props {
  card: IFlashcard;
  flipped: boolean;
  onClick: VoidFunction;
}

const speak = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;
  utterance.lang = 'en';
  speechSynthesis.speak(utterance);
};

const Flashcard = ({ card, flipped, onClick }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const playAudio = () => {
    if (card.audio) {
      audioRef.current?.play();
      return;
    }
    speak(card.targetText);
  };

  useLayoutEffect(() => {
    setIsImageLoading(true);
    setInputValue('');
    setIsCorrect(false);
  }, [card.image]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value.trim().toLowerCase() === card.targetText.trim().toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="w-72 h-96 [perspective:1000px]" onClick={onClick}>
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-md border border-gray-300 backface-hidden flex flex-col justify-center items-center p-4">
          {card.image && (
            <>
              {isImageLoading && (
                <div className="w-64 h-64 flex items-center justify-center mb-4 bg-gray-100 rounded animate-pulse">
                  <span className="text-gray-400 text-sm">Loading image...</span>
                </div>
              )}
              <img
                src={card.image}
                alt={card.nativeText}
                className={`w-64 h-64 object-cover rounded mb-4 transition-opacity duration-300 ${
                  isImageLoading ? 'opacity-0 absolute' : 'opacity-100 relative'
                }`}
                onLoad={() => setIsImageLoading(false)}
              />
            </>
          )}
          <p className="text-xl font-semibold text-center mb-2">
            {card.nativeText.charAt(0)?.toUpperCase() + card.nativeText.slice(1)}
          </p>

          {/* Input field */}
          <div className="w-full flex flex-col items-center mt-2">
            <div className="w-full flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Enter word in English"
                className={`w-full px-3 py-2 border ${
                  isCorrect ? 'border-green-500' : 'border-gray-300'
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-400`}
                onClick={(e) => e.stopPropagation()}
              />
              {isCorrect && <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(card.targetText);
                  }}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
                >
                  <SpeakerWaveIcon className="h-5 w-5" />
                </button>
              </>}
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-blue-100 rounded-xl shadow-md border border-gray-300 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center p-4">
          <p className="text-xl font-semibold text-center mb-4">
            {card.targetText.charAt(0)?.toUpperCase() + card.targetText.slice(1)}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              playAudio();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 flex items-center gap-2"
          >
            <SpeakerWaveIcon className="h-5 w-5" />
            Play
          </button>
          {card.audio && <audio ref={audioRef} src={card.audio} />}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

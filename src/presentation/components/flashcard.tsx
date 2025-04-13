import { useLayoutEffect, useRef, useState } from 'react';
import { IFlashcard } from '../../domain/flashcard';
import { SpeakerWaveIcon } from '@heroicons/react/16/solid';

interface Props {
  card: IFlashcard;
  flipped: boolean;
  onClick: VoidFunction;
}

const speak = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.1;     // 0.1 to 10
  utterance.pitch = 1;    // 0 to 2
  utterance.volume = 1;   // 0 to 1
  utterance.lang = 'en';
  speechSynthesis.speak(utterance);
};

const Flashcard = ({ card, flipped, onClick }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  
  const playAudio = () => {
    if (card.audio) {
      audioRef.current?.play();
      return;
    }
    speak(card.targetText);
  };

  useLayoutEffect(() => {
    setIsImageLoading(true);
  }, [card.image]);
  
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
          <p className="text-xl font-semibold text-center">{card.nativeText}</p>
        </div>
  
        {/* Back */}
        <div className="absolute w-full h-full bg-blue-100 rounded-xl shadow-md border border-gray-300 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center p-4">
          <p className="text-xl font-semibold text-center mb-4">{card.targetText}</p>
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
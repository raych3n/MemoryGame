import React, { useEffect, useState } from 'react';
import CardGroup from '../Components/CardGroup.tsx';

interface GameProps {
  setPage: (page: string) => void;
  level: string;
}

interface CardData {
  id: number;
  picture: string;
} 

const UNIQUE_PICTURES = ['/lion.jpg', '/bunny.jpg', '/cow.png'];

const createShuffledDeck = (requiredMatches: number): CardData[] => {
  const deck: CardData[] = [];
  let idCounter = 0;

  UNIQUE_PICTURES.forEach((pic) => {
    for (let i = 0; i < requiredMatches; i++) {
      deck.push({ id: idCounter++, picture: pic });
    }
  });

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};

const Game: React.FC<GameProps> = ({ setPage, level }) => {

  const getRequiredMatches = (): number => {
    switch (level.toLowerCase()) {
      case 'easy': return 2;
      case 'medium': return 3;
      case 'hard': return 4;
      default: return 2;
    }
  };

  const requiredMatches = getRequiredMatches();

  const [currentLevel, setCurrentLevel] = useState(level);
  
  const [cards, setCards] = useState<CardData[]>(() => createShuffledDeck(requiredMatches));
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState<boolean>(false);

  if (level !== currentLevel) {
    setCurrentLevel(level);
    setCards(createShuffledDeck(requiredMatches));
    setFlippedIndices([]);
    setMatchedIndices([]);
    setIsChecking(false);
  }

  const handleCardClick = (index: number) => {
    if (isChecking || flippedIndices.includes(index) || matchedIndices.includes(index)) return;

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === requiredMatches) {
      setIsChecking(true);
      const firstCardPic = cards[newFlipped[0]].picture;
      const allMatch = newFlipped.every(idx => cards[idx].picture === firstCardPic);

      setTimeout(() => {
        if (allMatch) {
          setMatchedIndices(prev => [...prev, ...newFlipped]);
        }
        setFlippedIndices([]);
        setIsChecking(false);
      }, 1000);
    }
  };
  
  useEffect(() => {
    if (matchedIndices.length === cards.length) {
      setPage('end');
    }
  }, [setPage, matchedIndices, cards]);
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      
      <button
        onClick={() => setPage('landing')} 
        className="fixed top-6 right-6 px-5 py-2.5 bg-[#E2B6B6] hover:bg-[#d6a5a5] text-white font-medium rounded-xl border border-white/20 cursor-pointer transition duration-300 backdrop-blur-sm shadow-md"
      >
        Home
      </button>

      <h1 className="text-[#E2B6B6] text-8xl font-serif mb-2 capitalize">{level}</h1>
      <p className="text-white/60 mb-6 font-sans">Match groups of {requiredMatches}</p>
      
      <div className="bg-white/20 p-8 rounded-3xl shadow-xl backdrop-blur-sm min-w-[350px]">
        {cards.length > 0 && (
          <CardGroup
            cards={cards}
            flippedIndices={flippedIndices}
            matchedIndices={matchedIndices}
            onCardClick={handleCardClick}
          />
        )}
      </div>
    </div>
  );
};

export default Game;
import React from 'react';
import Card from './Card';

interface CardData {
  id: number;
  picture: string;
}

interface CardGroupProps {
  cards: CardData[];
  flippedIndices: number[];
  matchedIndices: number[];
  onCardClick: (index: number) => void;
}

const CardGroup: React.FC<CardGroupProps> = ({ cards, flippedIndices, matchedIndices, onCardClick }) => {
  return (
    <div className={`grid grid-cols-${Math.ceil(Math.sqrt(cards.length))} gap-${cards.length < 9 ? '6' : '4'} justify-items-center`}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          id={card.id}
          picture={card.picture}
          isFlipped={flippedIndices.includes(index)}
          isMatched={matchedIndices.includes(index)}
          onClick={() => onCardClick(index)}
        />
      ))}
    </div>
  );
};

export default CardGroup;
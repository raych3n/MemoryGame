import React from "react";
import Card from "./Card";

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

const CardGroup: React.FC<CardGroupProps> = ({
  cards,
  flippedIndices,
  matchedIndices,
  onCardClick,
}) => {

  const gridColsClass = cards.length == 12 ? 'grid-cols-4' : `grid-cols-3`;
  return (
    <div
      className={`grid ${gridColsClass} gap-6 justify-items-center`}
    >
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

import React from "react";

interface CardProps {
  id: number;
  picture: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  picture,
  isFlipped,
  isMatched,
  onClick,
}) => {
  return (
    <div
      className="w-40 h-50 cursor-pointer perspective-1000"
      onClick={isFlipped || isMatched ? undefined : onClick}
    >
      <div
        className={`relative w-full h-full duration-500 transform-style-3d ${isFlipped || isMatched ? "rotate-y-180" : ""}`}
      >
        {!isFlipped && !isMatched ? (
          <div className="absolute inset-0 bg-[#E2B6B6] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-md backface-hidden">
            ?
          </div>
        ) : (
          <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center shadow-md border-2 border-[#E2B6B6] overflow-hidden">
            <img
              src={picture}
              alt="Card"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

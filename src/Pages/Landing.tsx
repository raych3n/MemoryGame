import React from "react";

interface LandingProps {
  setPage: (page: string) => void;
  level: string;
  setLevel: (level: string) => void;
}


const Landing: React.FC<LandingProps> = ({ setPage, level, setLevel }) => {  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#538F55]">
      <h1 className="text-[#E2B6B6] text-8xl font-serif mb-16 tracking-wide">
        Match the Animal
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 mb-16">
        <div className="relative">
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="appearance-none bg-[#E2B6B6] text-white text-3xl font-serif rounded-2xl px-12 py-3 pr-16 outline-none focus:ring-2 focus:ring-white/30 cursor-pointer shadow-sm w-full sm:w-auto text-center"
          >
            <option value="" disabled hidden>
              Level
            </option>
            <option value="Easy" className="text-white outline-none">
              Easy
            </option>
            <option value="Medium" className="text-white">
              Medium
            </option>
            <option value="Hard" className="text-white">
              Hard
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <button
        className={`bg-[#E2B6B6] text-white text-3xl font-serif rounded-2xl px-24 py-4 transition-colors shadow-sm ${!level ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d6a5a5] cursor-pointer '} `}
        onClick={() => level && setPage('game')}
        disabled={!level}
      >
        Start
      </button>
    </div>
  );
};

export default Landing;

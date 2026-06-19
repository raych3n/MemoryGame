import React from 'react';

interface EndProps {
    setPage: (page: string) => void;
    level: string;
}

const End: React.FC<EndProps> = ({ setPage, level }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-7xl font-bold text-[#E2B6B6] mb-7 self-center">Congratulations!</h1>
      <p className="text-white mb-7 text-3xl">You have completed the {level} level.</p>
      <button type="button" onClick={() => setPage('landing')} className="bg-[#E2B6B6] text-white py-2 px-4 rounded-lg hover:bg-[#d9a8a8] cursor-pointer  text-2xl">
        Back to Home
      </button>
    </div>
  );
};

export default End;

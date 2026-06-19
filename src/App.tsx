import { useState } from 'react';
import './App.css'
import Landing from './Pages/Landing.tsx'
import Game from './Pages/Game.tsx';
import End from './Pages/End.tsx';

function App() {
  const [page, setPage] = useState('landing');
  const [level, setLevel] = useState('');
  return (
    <>
    {page === 'landing' && <Landing setPage={setPage} level={level} setLevel={setLevel} />}
    {page === 'game' && <Game setPage={setPage} level={level} />}
    {page === 'end' && <End setPage={setPage} level={level} />}
    </>
  )
}

export default App

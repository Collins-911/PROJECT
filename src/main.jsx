import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Home from './components/Home.jsx';
import GameList from './pages/Gamelist.jsx';
import Purchased from './pages/Purchased.jsx';
import Freinds from './pages/Friends.jsx';
import Typing_game from './pages/Typing_game.jsx';
import Tic from './pages/Tic-Tac-Toe.jsx'
import Snake from './pages/Snake.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameList" element={<GameList />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="/friends" element={<Freinds />} />
        <Route path="/typing_game" element={<Typing_game />} />
        <Route path="/tic-tac-toe" element={<Tic />} />
        <Route path="/snake" element={<Snake />} />
       
       
    
      
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

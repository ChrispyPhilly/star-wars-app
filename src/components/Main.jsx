import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import StarshipList from './StarshipList';
import StarshipPage from './StarshipPage'; 

import FilmList from './FilmList';
import PlanetList from './PlanetList';
import CharacterList from './CharacterList';
import PlanetPage from './PlanetPage'; 

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/films" element={<FilmList />} />
        <Route path="/planets" element={<PlanetList />} />
        <Route path="/people" element={<CharacterList />} />
      </Routes>
    </div>
  );
};

export default Main;
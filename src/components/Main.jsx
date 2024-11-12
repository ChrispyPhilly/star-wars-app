import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import StarshipList from './StarshipList';
import StarshipPage from './StarshipPage'; 

import Films from './Films';
import Planets from './Planets';
import Characters from './Characters';
import PlanetPage from './PlanetPage'; 

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/starships/:id" element={<StarshipPage />} /> 
                
        <Route path="/films" element={<Films />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </main>
  );
}

export default Main;
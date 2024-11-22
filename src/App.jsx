import Home from './components/Home'; // Import the Home component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StarshipList from './components/StarshipList';
import FilmList from './components/FilmList'; // If you have a FilmList component
import PlanetList from './components/PlanetList'; // If you have a PlanetList component
import CharacterList from './components/CharacterList'; // If you have a CharacterList component
import StarshipPage from './components/StarshipPage';
import FilmPage from './components/FilmPage';
import CharacterPage from './components/CharacterPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Render header */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/starships" element={<StarshipList />} /> {/* Starship route */}
          <Route path="/films" element={<FilmList />} /> {/* Films route */}
          <Route path="/planets" element={<PlanetList />} /> {/* Planets route */}
          <Route path="/people" element={<CharacterList />} /> {/* Characters route */}
          <Route path='/starships/:id'  element={<StarshipPage />} />
          <Route path='/starship/:id'  element={<StarshipPage />} />
          <Route path='/starship/:id'  element={<StarshipPage />} />
          <Route path='/films/:id' element={<FilmPage /> } />
          <Route path='/characters/:id' element={<CharacterPage /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
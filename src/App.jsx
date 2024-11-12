import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Home from './components/Home';
import StarshipList from './components/StarshipList';

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
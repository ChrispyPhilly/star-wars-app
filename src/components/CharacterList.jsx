import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setCharacters(data.results); // Store characters in state
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Character List</h2>
      {characters.length === 0 ? (
        <p>Loading characters...</p>
      ) : (
        <div>
          {characters.map((character) => (
            <div key={character.url}>
              <h3>{character.name}</h3>
              <p>Height: {character.height}</p>
              <p>Gender: {character.gender}</p>
              <Link to={`/characters/${character.url.split('/')[5]}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
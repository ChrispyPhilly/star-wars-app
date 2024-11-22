import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p><strong>Height:</strong> {character.name}</p>
      <p><strong>Birth Year:</strong> {character.birth_year}</p>
      <p><strong>Mass:</strong> {character.mass}</p>
      <Link to="/characters">Return to Characters List</Link>
    </div>
  );
}

export default CharacterPage;
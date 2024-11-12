import React, { useEffect, useState } from 'react';

function Characters() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setPeople(data.results); 
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <h3>{person.name}</h3>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height} cm</p>
            <p>Birth Year: {person.birth_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function StarshipList() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        setStarships(data.results); 
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div>
      <h2>Starships</h2>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>
            <Link to={`/starships/${index + 1}`}> 
              <h3>{starship.name}</h3>
              <p>Model: {starship.model}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarshipList;
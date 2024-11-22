import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StarshipList = () => {
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
      <h2>Starships List</h2>
      {starships.length === 0 ? (
        <p>Loading starships...</p>
      ) : (
        <div>
          {starships.map((starship) => (
            <div key={starship.url}>
              <h3>{starship.name}</h3>
              <p>Model: {starship.model}</p>
              <p>Manufacturer: {starship.manufacturer}</p>
              <Link to={`/starships/${starship.url.split('/')[5]}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StarshipList;
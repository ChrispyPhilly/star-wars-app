import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets/');
        const data = await response.json();
        setPlanets(data.results); 
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div>
      <h2>Planets</h2>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <Link to={`/planets/${index + 1}`}> 
              <h3>{planet.name}</h3>
              <p>Climate: {planet.climate}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planets;
import React, { useEffect, useState } from 'react';

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets/');
        const data = await response.json();
        setPlanets(data.results); // Store planets in state
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div>
      <h2>Planets List</h2>
      {planets.length === 0 ? (
        <p>Loading planets...</p>
      ) : (
        <div>
          {planets.map((planet) => (
            <div key={planet.url}>
              <h3>{planet.name}</h3>
              <p>Climate: {planet.climate}</p>
              <p>Population: {planet.population}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanetList;
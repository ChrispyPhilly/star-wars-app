import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PlanetPage() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        console.error('Error fetching planet details:', error);
      }
    };

    fetchPlanetDetails();
  }, [id]);

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <Link to="/planets">Return to Planets List</Link>
    </div>
  );
}

export default PlanetPage;
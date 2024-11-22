import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const StarshipPage = () => {
  const { id } = useParams(); // Get the starship ID from the URL
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
        const data = await response.json();
        setStarship(data);
      } catch (error) {
        console.error('Error fetching starship:', error);
      }
    };

    fetchStarship();
  }, [id]); // Rerun the effect if the ID changes

  if (!starship) {
    return <p>Loading starship details...</p>;
  }

  return (
    <div>
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      {/* Add other attributes as needed */}
      <Link to="/starships">Return to Starship List</Link>
    </div>
  );
};

export default StarshipPage;
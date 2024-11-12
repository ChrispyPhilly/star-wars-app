import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function StarshipPage() {
  const { id } = useParams(); 
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
        const data = await response.json();
        setStarship(data); 
      } catch (error) {
        console.error('Error fetching starship details:', error);
      }
    };

    fetchStarshipDetails();
  }, [id]); 

  if (!starship) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h2>{starship.name}</h2>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Cost:</strong> {starship.cost_in_credits} credits</p>
      <p><strong>Length:</strong> {starship.length} meters</p>
      <p><strong>Max Speed:</strong> {starship.max_atmosphering_speed}</p>
      <p><strong>Crew:</strong> {starship.crew}</p>
      <p><strong>Passengers:</strong> {starship.passengers}</p>

      
      <Link to="/starships">Return to Starship List</Link>
    </div>
  );
}

export default StarshipPage;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/films/');
        const data = await response.json();
        setFilms(data.results); 
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div>
      <h2>Film List</h2>
      {films.length === 0 ? (
        <p>Loading films...</p>
      ) : (
        <div>
          {films.map((film) => (
            <div key={film.url}>
              <h3>{film.title}</h3>
              <p>Episode: {film.episode_id}</p>
              <Link to={`/films/${film.url.split('/')[5]}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilmList;
import React, { useEffect, useState } from 'react';

function Films() {
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
      <h2>Films</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            <h3>{film.title}</h3>
            <p>Episode: {film.episode_id}</p>
            <p>Director: {film.director}</p>
            <p>Release Date: {film.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Films;
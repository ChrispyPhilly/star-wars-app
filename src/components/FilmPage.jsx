import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function FilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/films/${id}/`);
        const data = await response.json();
        setFilm(data);
      } catch (error) {
        console.error('Error fetching film details:', error);
      }
    };

    fetchFilmDetails();
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{film.title}</h2>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Producer:</strong> {film.producer}</p>
      <p><strong>Release Date:</strong> {film.release_date}</p>
      <Link to="/films">Return to Film List</Link>
    </div>
  );
}

export default FilmPage;
import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <div style={styles.card}>
      <div style={styles.poster}>
        {/* Placeholder poster */}
        <img
          src={movie.poster || 'https://via.placeholder.com/200x300?text=No+Image'}
          alt={movie.title}
          style={styles.image}
        />
      </div>
      <div style={styles.info}>
        <h3 style={styles.title}>{movie.title}</h3>
        <p style={styles.duration}>{movie.duration} mins</p>
        <Link to={`/movies/${movie._id}`} style={styles.button}>View Details</Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  poster: {
    width: '100%',
    height: '300px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  info: {
    padding: '1rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: '0 0 0.5rem',
    fontSize: '1.2rem',
    color: '#333',
  },
  duration: {
    margin: 0,
    color: '#666',
    fontSize: '0.9rem',
  },
  button: {
    marginTop: 'auto',
    alignSelf: 'flex-start',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
  },
};

import React from 'react';

export default function ShowtimeSelector({ showtimes, onSelect }) {
  return (
    <div style={styles.container}>
      {showtimes.map((st, i) => (
        <button
          key={i}
          onClick={() => onSelect(st)}
          style={styles.button}
        >
          {new Date(st).toLocaleString()}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginTop: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

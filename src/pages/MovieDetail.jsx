// src/pages/MovieDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { id } = useParams();

  // Example: You can replace this with an API call later
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Movie Details</h1>
      <p style={styles.text}>You are viewing details for movie ID: <strong>{id}</strong></p>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', textAlign: 'center' },
  title: { fontSize: '2rem', marginBottom: '1rem' },
  text: { fontSize: '1.2rem' }
};

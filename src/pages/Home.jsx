import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const mockMovies = [
  {
    _id: '1',
    title: 'Inception',
    poster: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
    description: 'A skilled thief leads dream heists to steal secrets.',
  },
  {
    _id: '2',
    title: 'Interstellar',
    poster: 'https://m.media-amazon.com/images/I/71yMHa3U2tL._AC_SY679_.jpg',
    description: 'A team explores space to save humanity’s future.',
  },
  {
    _id: '3',
    title: 'Dunkirk',
    poster: 'https://m.media-amazon.com/images/I/81VJcIMQkGL._AC_SY679_.jpg',
    description: 'WWII survival epic told from land, sea, and air.',
  },
];

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  return (
    <main style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>🎬 Welcome to Film Hall Booking</h1>
        <p style={styles.heroSubtitle}>Experience cinema like never before. Book your favorite movies online in seconds.</p>
        <button style={styles.primaryButton} onClick={() => window.location.href = '/login'}>
          Book Now
        </button>
      </section>

      {/* Now Showing */}
      <section>
        <h2 style={styles.sectionTitle}>🍿 Now Showing</h2>
        <div style={styles.movieGrid}>
          {movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.stepsSection}>
        <h2 style={styles.sectionTitle}>📘 How It Works</h2>
        <div style={styles.stepsGrid}>
          {['Select a Movie', 'Choose Show Time', 'Pick Your Seats', 'Confirm & Pay'].map((step, index) => (
            <div key={index} style={styles.step}>
              <strong>{index + 1}.</strong> {step}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎟️ Ready to Book Your Seat?</h2>
        <p style={{ fontSize: '1.1rem' }}>Sign in or register to start booking today!</p>
        <button style={styles.secondaryButton} onClick={() => window.location.href = '/register'}>
          Get Started
        </button>
      </section>
    </main>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
  },

  hero: {
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    color: '#fff',
    padding: '3rem 2rem',
    textAlign: 'center',
    borderRadius: '12px',
    marginBottom: '3rem',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    maxWidth: '600px',
    margin: '0 auto 1.5rem',
  },
  primaryButton: {
    backgroundColor: '#ff6f00',
    color: '#fff',
    padding: '12px 28px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },

  sectionTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    margin: '2rem 0 1rem',
    color: '#222',
  },

  movieGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1.5rem',
    padding: '0 1rem',
  },

  stepsSection: {
    backgroundColor: '#fff',
    padding: '2rem 1rem',
    marginTop: '3rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem',
    textAlign: 'center',
  },
  step: {
    backgroundColor: '#f1f1f1',
    padding: '1.2rem',
    borderRadius: '10px',
    fontSize: '1rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },

  ctaSection: {
    textAlign: 'center',
    marginTop: '4rem',
    padding: '3rem 2rem',
    backgroundColor: '#e3f2fd',
    borderRadius: '12px',
  },
  secondaryButton: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '12px 28px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background 0.3s',
  },
};

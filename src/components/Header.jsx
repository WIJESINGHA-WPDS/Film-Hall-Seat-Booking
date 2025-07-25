// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>🎟️ <span style={styles.logoText}>Film Hall Booking</span></div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/movie/" style={styles.link}>Movies</Link>
        <Link to="/booking/1" style={styles.link}>Booking</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(90deg, #1f1f1f, #3f3f3f)',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: '0.5rem',
    background: 'linear-gradient(to right, #ff8a00, #e52e71)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#ff8a00',
  }
};

export default Header;

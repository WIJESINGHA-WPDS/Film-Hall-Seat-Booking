// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Film Hall Booking. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#bbb',
    textAlign: 'center',
    padding: '1rem 0',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: '4rem',
  }
};

export default Footer;

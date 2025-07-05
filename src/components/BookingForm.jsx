import React from 'react';

export default function BookingForm({ selectedSeats, onSubmit }) {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Selected Seats: <strong>{selectedSeats.join(', ') || 'None'}</strong>
      </p>
      <button
        onClick={onSubmit}
        disabled={selectedSeats.length === 0}
        style={{
          ...styles.button,
          backgroundColor: selectedSeats.length ? '#007bff' : '#ccc',
          cursor: selectedSeats.length ? 'pointer' : 'not-allowed',
        }}
      >
        Confirm Booking
      </button>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '1.5rem',
    textAlign: 'center',
  },
  text: {
    marginBottom: '1rem',
    fontSize: '1rem',
    color: '#333',
  },
  button: {
    padding: '0.75rem 2rem',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
  },
};

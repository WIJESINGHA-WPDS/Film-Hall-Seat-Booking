import React from 'react';

export default function SeatGrid({ seats, bookedSeats = [], onToggle }) {
  return (
    <div style={styles.grid}>
      {seats.map(seat => {
        const isBooked = bookedSeats.includes(seat);
        return (
          <button
            key={seat}
            disabled={isBooked}
            onClick={() => onToggle(seat)}
            style={{
              ...styles.seat,
              backgroundColor: isBooked ? '#ccc' : '#007bff',
              cursor: isBooked ? 'not-allowed' : 'pointer',
            }}
          >
            {seat}
          </button>
        );
      })}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 60px)',
    gap: '0.5rem',
    justifyContent: 'center',
  },
  seat: {
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontWeight: 'bold',
  },
};

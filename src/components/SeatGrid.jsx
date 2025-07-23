import React from 'react';
import './SeatGrid.css'; // Import the CSS file

const premiumSeats = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];

const SeatGrid = ({ rows, bookedSeats, onToggle }) => {
  return (
    <div className="seat-container">
      <div className="screen">SCREEN</div>
      <div className="seat-grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seat, seatIndex) => {
              if (seat === '') {
                return <div key={`aisle-${seatIndex}`} className="aisle" />;
              }

              const isBooked = bookedSeats.includes(seat);
              const isPremium = premiumSeats.includes(seat);

              return (
                <button
                  key={seat}
                  disabled={isBooked}
                  onClick={() => onToggle(seat)}
                  className={`seat ${isBooked ? 'booked' : isPremium ? 'premium' : 'available'}`}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatGrid;

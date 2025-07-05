import { useParams } from "react-router-dom";

const Booking = () => {
  const { showId } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking Page</h2>
      <p>Booking for Show ID: {showId}</p>
    </div>
  );
};

export default Booking;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SeatGrid from './components/SeatGrid';
import Home from './pages/Home';
import Booking from './pages/Booking';
import MovieDetail from './pages/MovieDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
      
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:showId" element={<Booking />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
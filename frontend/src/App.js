import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Sign from './Sign/Sign';
import Loans from './Loans/Loans';
import Customers from './Customers/Customers';
import Vehicles from './Vehicles/Vehicles';
import api from './api';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </Router>
  );
}

export default App;


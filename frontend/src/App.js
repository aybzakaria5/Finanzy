import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
// import Catalogue from './Catalogue/Catalogue';
// import Books from './Catalogue/Categorie/Books/Books';
// import Contact from './Contact/Contact';
import Sign from './Sign/Sign'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/sign in" element={<Catalogue />} /> */}
        {/* <Route path="/books/:category" element={<Books />} />
        <Route path="/contact" element={<Contact />} /> */}

        <Route path="/sign" element={<Sign/>} />
      </Routes>
    </Router>
  );
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/header';
import Footer from './Component/Footer';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Service from './pages/service';
import Contact from './pages/contact'; // Ensure this matches the exported name
import Company from './pages/company'; // Ensure this matches the exported name
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

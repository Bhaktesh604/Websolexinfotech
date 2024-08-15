import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Service from './pages/service';
import Contact from './pages/contact'; // Ensure this matches the exported name
import Company from './pages/company'; // Ensure this matches the exported name
import Webdevelopment from './components/webdevelopment';
import Graphic from './components/graphic';
import Uiux from './components/design'
import MobileApp from './components/mobileapps'
import Digital from './components/digital';
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
        <Route path="/service/webdevelopment" element={<Webdevelopment />} />
        <Route path="/service/graphic" element={<Graphic />} />
        <Route path="/service/uiux" element={<Uiux />}/>
        <Route path="/service/mobileapps" element={<MobileApp />}/>
        <Route path="/service/digital" element={<Digital />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

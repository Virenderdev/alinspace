import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Blog from './pages/Blog/Blog';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
        

function App() {
  return (
    <PrimeReactProvider>
    <div className="App">
     <Header/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
  
    </div>
    </PrimeReactProvider>
  );
}

export default App;

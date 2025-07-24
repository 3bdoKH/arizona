import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Bakery from './pages/bakery/Bakery';
import Christmas from './pages/christmas/Christmas';
import CupCake from './pages/cup-cake/CupCake';
import Gatoo from './pages/gatoo/Gatoo';
import Nwaaem from './pages/nwaaem/Nwaaem';
import ShamElnseem from './pages/sham/ShamElnseem';
import ProductDetail from './pages/ProductDetail';
import Cookies from './pages/cookies/Cookies';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/christmas" element={<Christmas />} />
        <Route path="/cup-cake" element={<CupCake />} />
        <Route path="/gatoo" element={<Gatoo />} />
        <Route path="/nwaaem" element={<Nwaaem />} />
        <Route path="/sham" element={<ShamElnseem />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

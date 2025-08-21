import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Bakery from "./pages/bakery/Bakery";
import Christmas from "./pages/christmas/Christmas";
import CupCake from "./pages/cup-cake/CupCake";
import Gatoo from "./pages/gatoo/Gatoo";
import Nwaaem from "./pages/nwaaem/Nwaaem";
import ShamElnseem from "./pages/sham/ShamElnseem";
import ProductDetail from "./pages/ProductDetail";
import Cookies from "./pages/cookies/Cookies";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
      <div className="floating-contact">
        <a
          className="floating-btn whatsapp"
          href={`https://wa.me/201014278883?text=${encodeURIComponent(
            "مرحبًا! أود الاستفسار عن المنتجات."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M19.11 17.55c-.27-.14-1.59-.78-1.83-.87-.24-.09-.41-.14-.59.14-.18.27-.68.87-.83 1.05-.15.18-.31.2-.58.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.48-1.82-.15-.27-.02-.42.11-.56.11-.11.27-.29.4-.43.13-.14.18-.24.27-.41.09-.18.04-.32-.02-.45-.07-.14-.59-1.42-.81-1.95-.21-.5-.43-.43-.59-.44l-.5-.01c-.18 0-.45.07-.68.32-.23.25-.89.86-.89 2.08 0 1.22.93 2.4 1.06 2.57.13.18 1.83 2.79 4.43 3.91.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.49-.07 1.59-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
            <path d="M26.7 5.3C24.2 2.8 20.8 1.5 17.3 1.5 9.9 1.5 4 7.4 4 14.8c0 2.3.6 4.6 1.8 6.6L4 30.5l9.3-1.7c1.9 1 4 1.6 6.1 1.6 7.4 0 13.3-6 13.3-13.3 0-3.5-1.3-6.9-3.7-9.5zM17.5 28.1c-1.9 0-3.8-.5-5.4-1.4l-.4-.2-5.5 1 1-5.4-.3-.4c-1.1-1.7-1.6-3.7-1.6-5.8 0-5.9 4.8-10.7 10.7-10.7 2.9 0 5.6 1.1 7.6 3.2 2 2 3.2 4.7 3.2 7.6 0 5.9-4.8 10.7-10.7 10.7z" />
          </svg>
        </a>
        <a
          className="floating-btn phone"
          href="tel:+201014278883"
          aria-label="Phone"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.85 22 2 13.15 2 2c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

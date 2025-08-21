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
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm6.093 15.222c-.272.822-.795 1.522-1.508 2.032-.712.51-1.54.796-2.413.846-.864.05-1.717-.127-2.48-.51-1.369-.68-2.552-1.672-3.452-2.89-.9-1.22-1.493-2.646-1.725-4.147-.232-1.502-.101-3.034.383-4.479.484-1.444 1.298-2.77 2.375-3.85C10.353 1.123 11.696.5 13.125.25c1.428-.25 2.9-.08 4.265.493 1.366.573 2.561 1.52 3.436 2.75.875 1.23 1.393 2.694 1.494 4.204.1 1.51-.172 3.014-.785 4.354-.613 1.34-1.555 2.493-2.728 3.338-.29.21-.622.354-.97.425-.348.072-.706.072-1.055 0-.348-.072-.68-.216-.97-.425-.29-.21-.524-.48-.683-.795-.16-.314-.244-.66-.244-1.01 0-.35.083-.696.243-1.01.16-.314.394-.584.683-.794.29-.21.622-.354.97-.425.348-.072.707-.072 1.055 0 .348.071.68.215.97.425.29.21.524.48.683.794.16.314.244.66.244 1.01 0 .35-.083.696-.243 1.01-.16.314-.394.584-.683.794z" />
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

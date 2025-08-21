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
          <svg viewBox="0 0 512 512" aria-hidden="true">
            <path
              d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
              fill="#EDEDED"
            />
            <path
              d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
              fill="#55CD6C"
            />
            <path
              d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
              fill="#FEFEFE"
            />
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

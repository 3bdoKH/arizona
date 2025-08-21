import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import '../bakery/bakery.css'

const shamImages = [
  'IMG-20250721-WA0102.jpg',
  'IMG-20250721-WA0091.jpg',
  'IMG-20250721-WA0092.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.38_1c477569.jpg',
  'IMG-20250721-WA0061.jpg',
  'IMG-20250721-WA0059.jpg',
  'IMG-20250721-WA0028.jpg',
  'IMG-20250721-WA0058.jpg',
  'IMG-20250721-WA0041.jpg',
  'IMG-20250721-WA0042.jpg',
  'IMG-20250721-WA0015.jpg',
  'IMG-20250721-WA0016.jpg',
];

const ShamElnseem = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="bakery-gallery-bg">
        <h2 className="bakery-gallery-title">مجموعة مميزة من شم النسيم</h2>
        <div className="bakery-gallery-grid">
          {shamImages.map((img) => (
            <Link
              to={`/product/sham-elnseem/${encodeURIComponent(img)}`}
              className="bakery-card-link"
              key={img}
              style={{ textDecoration: 'none' }}
            >
              <div className="bakery-card">
                <img
                  className="bakery-card-img"
                  src={`/images/sham-elnseem/${img}`}
                  alt={img}
                />
                <div className="bakery-card-title">
                  شم النسيم
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShamElnseem

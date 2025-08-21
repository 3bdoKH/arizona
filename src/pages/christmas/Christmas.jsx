import React from 'react'
import './christmas.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'

const christmasImages = [
  'WhatsApp Image 2025-07-21 at 14.14.48_5e33ea19.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.48_e0608c12.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.48_c997095b.jpg',
  'IMG-20250721-WA0134.jpg',
  'IMG-20250721-WA0137.jpg',
  'IMG-20250721-WA0133.jpg',
  'IMG-20250721-WA0132.jpg',
  'IMG-20250721-WA0136.jpg',
  'IMG-20250721-WA0135.jpg',
  'IMG-20250721-WA0131.jpg',
  'IMG-20250721-WA0080.jpg',
  'IMG-20250721-WA0081.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.38_f23047a3.jpg',
];

const Christmas = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="bakery-gallery-bg">
        <h2 className="bakery-gallery-title">مجموعه مميزه من منتجات الكريسماس</h2>
        <div className="bakery-gallery-grid">
          {christmasImages.map((img) => (
            <Link
              to={`/product/christmas/${encodeURIComponent(img)}`}
              className="bakery-card-link"
              key={img}
              style={{ textDecoration: 'none' }}
            >
              <div className="bakery-card">
                <img
                  className="bakery-card-img"
                  src={`/images/christmas/${img}`}
                  alt={img}
                />
                <div className="bakery-card-title">
                  كريسماس
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

export default Christmas

import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import '../bakery/bakery.css'

const cupCakeImages = [
  'IMG-20250721-WA0177.jpg',
  'IMG-20250721-WA0166.jpg',
  'IMG-20250721-WA0161.jpg',
  'IMG-20250721-WA0178.jpg',
  'IMG-20250721-WA0160.jpg',
  'IMG-20250721-WA0155.jpg',
  'IMG-20250721-WA0117.jpg',
  'IMG-20250721-WA0118.jpg',
  'IMG-20250721-WA0107.jpg',
  'IMG-20250721-WA0104.jpg',
  'IMG-20250721-WA0103.jpg',
  'IMG-20250721-WA0106.jpg',
  'IMG-20250721-WA0094.jpg',
  'IMG-20250721-WA0093.jpg',
  'IMG-20250721-WA0096.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.41_76c7886f.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.39_b6d1766d.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.39_a1b8b04f.jpg',
  'IMG-20250721-WA0054.jpg',
  'IMG-20250721-WA0039.jpg',
];

const CupCake = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="bakery-gallery-bg">
        <h2 className="bakery-gallery-title">مجموعة مميزة من الكب كيك</h2>
        <div className="bakery-gallery-grid">
          {cupCakeImages.map((img) => (
            <Link
              to={`/product/cup-cake/${encodeURIComponent(img)}`}
              className="bakery-card-link"
              key={img}
              style={{ textDecoration: 'none' }}
            >
              <div className="bakery-card">
                <img
                  className="bakery-card-img"
                  src={`/images/cup-cake/${img}`}
                  alt={img}
                />
                <div className="bakery-card-title">
                  كب كيك
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

export default CupCake

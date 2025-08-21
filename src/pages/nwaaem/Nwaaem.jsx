import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import '../bakery/bakery.css'

const nwaaemImages = [
  'IMG-20250721-WA0182.jpg',
  'IMG-20250721-WA0151.jpg',
  'IMG-20250721-WA0150.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.00_bcef6e22.jpg',
  'IMG-20250721-WA0116.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.51_148a6deb.jpg',
  'IMG-20250721-WA0098.jpg',
  'IMG-20250721-WA0099.jpg',
  'IMG-20250721-WA0095.jpg',
  'IMG-20250721-WA0090.jpg',
  'IMG-20250721-WA0087.jpg',
  'IMG-20250721-WA0089.jpg',
  'IMG-20250721-WA0088.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.40_5c3f442f.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.40_8eb9c7fe.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.39_eafa051a.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.38_84ea6351.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.37_d29b5a11.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.37_9ce03b83.jpg',
  'IMG-20250721-WA0045.jpg',
];

const Nwaaem = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="bakery-gallery-bg">
        <h2 className="bakery-gallery-title">مجموعة مميزة من النواعم</h2>
        <div className="bakery-gallery-grid">
          {nwaaemImages.map((img) => (
            <Link
              to={`/product/nwaaem/${encodeURIComponent(img)}`}
              className="bakery-card-link"
              key={img}
              style={{ textDecoration: 'none' }}
            >
              <div className="bakery-card">
                <img
                  className="bakery-card-img"
                  src={`/images/nwaaem/${img}`}
                  alt={img}
                />
                <div className="bakery-card-title">
                  نواعم
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

export default Nwaaem

import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import '../bakery/bakery.css'

const gatooImages = [
  'IMG-20250721-WA0163.jpg',
  'IMG-20250721-WA0175.jpg',
  'IMG-20250721-WA0179.jpg',
  'IMG-20250721-WA0176.jpg',
  'IMG-20250721-WA0184.jpg',
  'IMG-20250721-WA0181.jpg',
  'IMG-20250721-WA0167.jpg',
  'IMG-20250721-WA0183.jpg',
  'IMG-20250721-WA0165.jpg',
  'IMG-20250721-WA0171.jpg',
  'IMG-20250721-WA0170.jpg',
  'IMG-20250721-WA0156.jpg',
  'IMG-20250721-WA0164.jpg',
  'IMG-20250721-WA0162.jpg',
  'IMG-20250721-WA0157.jpg',
  'IMG-20250721-WA0159.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.52_027dc602.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.52_6e698e01.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.52_176a6140.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.50_c1cb2c33.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.50_d6710842.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.50_3858c6f9.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.50_2a2d7701.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.49_03a51040.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.49_6afe3dee.jpg',
  'WhatsApp Image 2025-07-21 at 14.14.49_1b0cc5dc.jpg',
  'IMG-20250721-WA0130.jpg',
  'IMG-20250721-WA0127.jpg',
  'IMG-20250721-WA0128.jpg',
  'IMG-20250721-WA0129.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.56_8c2de063.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.56_f9a49465.jpg',
  'IMG-20250721-WA0121.jpg',
  'IMG-20250721-WA0124.jpg',
  'IMG-20250721-WA0123.jpg',
  'IMG-20250721-WA0122.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.54_0e98aeee.jpg',
  'IMG-20250721-WA0120.jpg',
  'IMG-20250721-WA0115.jpg',
  'IMG-20250721-WA0112.jpg',
  'IMG-20250721-WA0111.jpg',
  'IMG-20250721-WA0114.jpg',
  'IMG-20250721-WA0105.jpg',
  'IMG-20250721-WA0097.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.44_f3beb75b.jpg',
  'IMG-20250721-WA0082.jpg',
  'IMG-20250721-WA0084.jpg',
  'IMG-20250721-WA0083.jpg',
  'IMG-20250721-WA0085.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.41_05cdade5.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.41_6bc472d5.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.40_62b9bbf4.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.40_93b0d85b.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.39_6defd1b2.jpg',
  'WhatsApp Image 2025-07-21 at 14.13.38_4420b64a.jpg',
  'IMG-20250721-WA0017.jpg',
  'IMG-20250721-WA0047.jpg',
  'IMG-20250721-WA0050.jpg',
  'IMG-20250721-WA0035.jpg',
  'IMG-20250721-WA0031.jpg',
  'IMG-20250721-WA0027.jpg',
  'IMG-20250721-WA0030.jpg',
  'IMG-20250721-WA0046.jpg',
  'IMG-20250721-WA0043.jpg',
  'IMG-20250721-WA0036.jpg',
  'IMG-20250721-WA0018.jpg',
  'IMG-20250721-WA0034.jpg',
  'IMG-20250721-WA0051.jpg',
  'IMG-20250721-WA0021.jpg',
  'IMG-20250721-WA0025.jpg',
  'IMG-20250721-WA0023.jpg',
  'IMG-20250721-WA0024.jpg',
  'IMG-20250721-WA0019.jpg',
  'IMG-20250721-WA0011.jpg',
  'IMG-20250721-WA0014.jpg',
  'IMG-20250721-WA0032.jpg',
  'IMG-20250721-WA0022.jpg',
  'IMG-20250721-WA0029.jpg',
  'IMG-20250721-WA0009.jpg',
  'IMG-20250721-WA0010.jpg',
  'IMG-20250721-WA0020.jpg',
  'IMG-20250721-WA0012.jpg',
  'WhatsApp Image 2025-07-21 at 13.29.45_b6d4f76b.jpg',
  'WhatsApp Image 2025-07-21 at 13.28.40_eff52a83.jpg',
  'WhatsApp Image 2025-07-21 at 13.28.40_63116155.jpg',
  'WhatsApp Image 2025-07-21 at 13.28.40_97b45865.jpg',
];

const Gatoo = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="bakery-gallery-bg">
        <h2 className="bakery-gallery-title">مجموعة مميزة من التورتات</h2>
        <div className="bakery-gallery-grid">
          {gatooImages.map((img) => (
            <Link
              to={`/product/gatoo/${encodeURIComponent(img)}`}
              className="bakery-card-link"
              key={img}
              style={{ textDecoration: 'none' }}
            >
              <div className="bakery-card"
                style={{
                  height: '400px',
                }}
              >
                <img
                  style={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
                    },
                  }}
                  className="bakery-card-img"
                  src={`/images/gatoo/${img}`}
                  alt={img}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Gatoo

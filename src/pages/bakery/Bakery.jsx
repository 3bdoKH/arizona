import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './bakery.css'
import { Link } from 'react-router-dom'

const bakeryImages = [
    'IMG-20250721-WA0001.jpg',
    'IMG-20250721-WA0026.jpg',
    'IMG-20250721-WA0037.jpg',
    'IMG-20250721-WA0038.jpg',
    'IMG-20250721-WA0055.jpg',
    'IMG-20250721-WA0056.jpg',
    'IMG-20250721-WA0100.jpg',
    'IMG-20250721-WA0101.jpg',
    'IMG-20250721-WA0108.jpg',
    'IMG-20250721-WA0109.jpg',
    'IMG-20250721-WA0113.jpg',
    'IMG-20250721-WA0149.jpg',
    'IMG-20250721-WA0154.jpg',
    'IMG-20250721-WA0172.jpg',
    'IMG-20250721-WA0173.jpg',
    'IMG-20250721-WA0174.jpg',
];

const Bakery = () => {
    return (
        <>
        <Header />
        <div className="bakery-gallery-bg">
            <h2 className="bakery-gallery-title">مجموعه مميزه من مخبوزاتنا الشهيه</h2>
            <div className="bakery-gallery-grid">
            {bakeryImages.map((img, idx) => (
                <Link
                to={`/product/bakery/${encodeURIComponent(img)}`}
                className="bakery-card-link"
                key={img}
                style={{ textDecoration: 'none' }}
                >
                <div className="bakery-card">
                    <img
                    className="bakery-card-img"
                    src={`/images/bakery/${img}`}
                    alt={img}
                    />
                    <div className="bakery-card-title">
                    مخبوزات
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

export default Bakery
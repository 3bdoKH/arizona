import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import '../bakery/bakery.css'

const cookiesImages = [
    'IMG-20250721-WA0040.jpg',
    'IMG-20250721-WA0057.jpg',
    'IMG-20250721-WA0062.jpg',
    'IMG-20250721-WA0048.jpg',
    'IMG-20250721-WA0060.jpg',
    'IMG-20250721-WA0053.jpg',
    'IMG-20250721-WA0049.jpg',
    'IMG-20250721-WA0044.jpg',
    'IMG-20250721-WA0045.jpg',
    'IMG-20250721-WA0052.jpg',
    'IMG-20250721-WA0033.jpg',
    'IMG-20250721-WA0013.jpg',
];

const Cookies = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <div className="bakery-gallery-bg">
                <h2 className="bakery-gallery-title">مجموعة مميزة من الكوكيز</h2>
                <div className="bakery-gallery-grid">
                    {cookiesImages.map((img) => (
                        <Link
                            to={`/product/cookies/${encodeURIComponent(img)}`}
                            className="bakery-card-link"
                            key={img}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="bakery-card">
                                <img
                                    className="bakery-card-img"
                                    src={`/images/cookies/${img}`}
                                    alt={img}
                                />
                                <div className="bakery-card-title">
                                    كوكيز
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

export default Cookies

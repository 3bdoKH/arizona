import React, { useState, useEffect } from 'react';
import './hero.css';

const images = [
    require('../../cake.png'),
    require('../../cake-2.png'),
    require('../../cake-3.png'),
    require('../../cake-4.png'),
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        setFade(true);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length);
            setFade(false);
        }, 500); // fade duration
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hero-container'>
        <div className='hero-content'>
            <h1>حلواني الاريزونا</h1>
            <p>أريزونا للحلويات هو وجهتك المثالية لاكتشاف عالم من الحلويات الشهية والمبتكرة! نقدم تشكيلة واسعة من الحلويات الشرقية الأصيلة والغربية العصرية، مصنوعة بأيدي خبراء باستخدام أفضل المكونات الطازجة. سواء كنت تبحث عن كعك طري، حلويات مناسبة للدايت، أو تحضيرات خاصة بالمناسبات، ستجد عندنا كل ما يلبي ذوقك. نتميز بوصفاتنا الفريدة، جودة منتجاتنا العالية، وخدمتنا الممتازة التي تضمن رضاك الكامل. زُر أريزونا للحلويات واستمتع بتجربة حلوة لا تُنسى! 🍰✨</p>
        </div>
        <div className='hero-image'>
            <img
            src={images[current]}
            alt='hero'
            className={fade ? 'fade' : ''}
            />
        </div>
        </div>
    );
};

export default Hero;

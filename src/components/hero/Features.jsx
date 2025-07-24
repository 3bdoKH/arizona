import React from 'react';
import styles from './Features.module.css';

const features = [
    {
        icon: (
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M7 20v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"/></svg>
        ),
        title: 'تغليف ممتاز بعناية',
        desc: 'نهتم بتغليف منتجاتنا بعناية فائقة بأرقى العلب وخامات التغليف لضمان وصولها بأمان لعملائنا.'
    },
    {
        icon: (
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="5"/></svg>
        ),
        title: 'طعم إستثنائي ملوش زي',
        desc: 'مجموعة من أمهر طهاة الحلويات الغربية والشرقية والمخبوزات في مصر يصنعون أشهى الأصناف.'
    }
    ];

    const Features = () => (
    <section className={styles['features-section']}>
        <h2 className={styles['features-title']}>ليه تشتري من اريزونا ؟ </h2>
        <div className={styles['features-list']}>
        {features.map((f, i) => (
            <div className={styles['feature-item']} key={i}>
            <div className={styles['feature-icon']}>{f.icon}</div>
            <h3 className={styles['feature-heading']}>{f.title}</h3>
            <p className={styles['feature-desc']}>{f.desc}</p>
            </div>
        ))}
        </div>
    </section>
);

export default Features; 
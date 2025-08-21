import React from 'react'
import './contact.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Instagram, Facebook } from 'lucide-react'

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">تواصل معنا</h1>
          <h2 className="contact-subtitle">Contact Us</h2>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-section">
                <h3 className="section-title">معلومات التواصل</h3>
                <h4 className="section-subtitle">Contact Information</h4>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h5>الهاتف والواتساب</h5>
                    <p>Phone & WhatsApp</p>
                    <a href="tel:01014278883" className="contact-link">01014278883</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h5>العنوان</h5>
                    <p>Address</p>
                    <span className="address-text">18 درب البرابره اول شارع الجيش العتبه</span>
                  </div>
                </div>
              </div>

              <div className="contact-section">
                <h3 className="section-title">وسائل التواصل الاجتماعي</h3>
                <h4 className="section-subtitle">Social Media</h4>

                <div className="social-links">
                  <a
                    href="https://www.facebook.com/arizona4sweet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    <div className="social-icon"><Facebook /></div>
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://instagram.com/arizona4sweet?igshid=exa73jsv7o5x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <div className="social-icon"><Instagram /> </div>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="map-section">
              <h3 className="section-title">موقعنا</h3>
              <h4 className="section-subtitle">Our Location</h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.3772768275896!2d31.252826418368773!3d30.050938104196838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840984271f7df%3A0x2171497582dda52f!2sEl%20Arizona!5e0!3m2!1sen!2seg!4v1753528787164!5m2!1sen!2seg"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arizona Patisserie Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact

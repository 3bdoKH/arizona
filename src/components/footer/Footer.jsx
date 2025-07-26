import React from 'react'
import './footer.css'
import { Facebook, Instagram } from 'lucide-react'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h2 className="footer-title">Arizona Bakery</h2>
                    <p className="footer-description">Delicious cakes, cookies, and more. Made with love and the finest ingredients. Serving sweet moments every day!</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/arizona4sweet" aria-label="Facebook"><Facebook /></a>
                        <a href="https://instagram.com/arizona4sweet?igshid=exa73jsv7o5x" aria-label="Instagram"><Instagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Arizona Bakery. All rights reserved.
                Powered by <a href="https://www.emereld-marketing.online">EMERELD</a>
            </div>
        </footer>
    )
}

export default Footer

import React, { useState } from 'react'
import logo from '../../logo-ar.png'
import './header.css'
import { Menu, X } from 'lucide-react'
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header>
            <div className="logo-wrapper">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="/gatoo">تورتات</a></li>
                    <li><a href="/cookies">كوكيز</a></li>
                    <li><a href="/cup-cake">كب كيك</a></li>
                    <li><a href="/nwaaem">نواعم العيد</a></li>
                    <li><a href="/christmas">كريسماس</a></li>
                    <li><a href="/sham">شم النسيم</a></li>
                    <li><a href="/bakery">مخبوزات</a></li>
                </ul>
            </nav>
            <div className="mobile-menu-icon">
                {
                    open ? <X onClick={() => setOpen(!open)} /> : <Menu onClick={() => setOpen(!open)} />
                }
            </div>

            {open && (
                <div className="mobile-menu">
                    <div className="mobile-menu-content">
                        <ul>
                            <li><a href="/gatoo">تورتات</a></li>
                            <li><a href="/cookies">كوكيز</a></li>
                            <li><a href="/cup-cake">كب كيك</a></li>
                            <li><a href="/nwaaem">نواعم العيد</a></li>
                            <li><a href="/christmas">كريسماس</a></li>
                            <li><a href="/sham">شم النسيم</a></li>
                            <li><a href="/bakery">مخبوزات</a></li>
                        </ul>
                    </div>
                </div>
            )}

            <div className="header-info">
                <ul>
                    <li><a href="/about">من نحن</a></li>
                    <li><a href="/contact">تواصل معنا</a></li>
                </ul>
            </div>

        </header>
    )
}

export default Header

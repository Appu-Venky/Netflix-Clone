import React, { useEffect, useRef, useState } from 'react';
import {
    Bell,
    ChevronDown,
    CircleUser,
    Menu,
    Search
} from "lucide-react";
import logo from '../../assets/netflix-logo.svg';
import { logout } from "../../firebase";
import './Navbar.css';

const Navbar = () => {
    const NavRef = useRef();
    const [openMenu, setOpenMenu] = useState(false); // 👈 new state

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                NavRef.current.classList.add('nav-dark')
            } else {
                NavRef.current.classList.remove('nav-dark')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={NavRef} className='navbar'>
            <div className="navbar-left">
                {/* menu icon click */}
                <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
                    <Menu />
                </div>

                <img src={logo} alt="logo" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>

            <div className="navbar-right">
                <Search size={18} />
                <p>Children</p>
                <Bell size={18} />
                <div className='navbar-profile'>
                    <CircleUser size={18} />
                    <ChevronDown size={18} />
                    <div onClick={logout} className="dropdown">
                        <p>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>

            {/* Show mobile menu when openMenu is true */}
            {openMenu && (
                <div className="mobileview">
                    <ul>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;

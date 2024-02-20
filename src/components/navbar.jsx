// Navbar.js

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';
import logo from  '../assets/logo.png';
import {WhatsappLogo, FacebookLogo} from "phosphor-react";


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="navbar"> 
            <div className="logo">
                <img 
                src={logo} 
                alt="logo" 
                className="logo-pizza"
                />
            </div>
            <div className="links" ref={menuRef}>
                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={`menu-opciones ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/Slide">PROMOCIONES</Link>
                    </li>
                    <li>
                        <Link to="/">PIZZAS</Link>
                    </li>
                    <li>
                        <Link to="/Login">INICIAR SESIÓN</Link>
                    </li>
                    <li className="shopping-cart-container">
                        <Link to="/carro" className="shopping-cart-link">
                            <ShoppingCart size={40} />
                        </Link>
                    </li>
                </ul>
            </div> 
            <div className="redes">
                <a href="https://wa.me/+758848" className="icon">
                    <WhatsappLogo size={32} />
                </a>
                <a href="https://www.facebook.com/?locale=es_LA" className="icon">
                    <FacebookLogo size={32} />
                </a>
            </div>
        </div>
    );
};

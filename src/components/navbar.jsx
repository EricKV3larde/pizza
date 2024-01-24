// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar"> 
            <div className="links">
                <Link to="/">Tienda</Link>
                <Link to="/carro" className="shopping-cart-link">
                    <ShoppingCart size={32} />
                </Link>
            </div>    
        </div>
    );
};

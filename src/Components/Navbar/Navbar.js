import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
    const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);

    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen); // Toggle menu state
    const handleProductToggle = () => setIsProductPopupOpen(!isProductPopupOpen);

    const navigate = useNavigate();

    const scrollToFooter = () => {
        const footerElement = document.getElementById("footer");
        if (footerElement) {
          footerElement.scrollIntoView({ behavior: "smooth" });
        }
      };
    
    const scrollToAbout = async() => {

        await navigate("/");

        setTimeout(() => {
            const aboutElement = document.getElementById("info");
            if (aboutElement) {
                aboutElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

  return (
    <>
    <nav className="navbar">
        <div className="header">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            
            {/* Hamburger Menu for Mobile */}
            <button className="navbar-toggle" onClick={handleMenuToggle}>
                &#9776; {/* Hamburger icon */}
            </button>
        </div>

        {/* Links List */}
        <ul className={`navbar-links ${isMenuOpen ? "open" : "close"}`}>
            <li><a href="/">Home</a></li>
            <li ><span className="product-toggle" onClick={handleProductToggle}>
                    Products
                </span>
                {isProductPopupOpen && (
                <div className="product-popup">
                    <ul>
                        <li><a className="product-type" href="/products/insecticide">Insecticide</a></li>
                        <li><a className="product-type" href="/products/fungicide">Fungicide</a></li>
                        <li><a className="product-type" href="/products/herbicide">Herbicide</a></li>
                        <li><a className="product-type" href="/products/pgr">PGR</a></li>
                        <li><a className="product-type" href="/products/fertilizer">Fertilizer</a></li>
                    </ul>
                </div>
                )}
            </li>
            <li><span className="product-toggle" onClick={scrollToAbout}>About</span></li>
            <li><span className="product-toggle" onClick={scrollToFooter}>Contact</span></li>
        </ul>
    </nav>
    </>
  );
};

export default Navbar;

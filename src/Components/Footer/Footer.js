import React from "react";

import { 
    FaLocationArrow, 
    FaMobileAlt, 
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
     } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

import "./Footer.css";
const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="about-text">
                        {`Established in 2023, Ampaliya Chemicals Private Limited delivers high-quality agrochemical solutions to enhance farming productivity. We uphold stringent quality standards and advanced technology. Our expert team provides personalized support to optimize farmers' yields.`}
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            {`Survey No. 165/1, Plote No. 18/B, Narayan Industrial Estate, Vasana(Iyava), Sanand, Ahmedabad-382170`}
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: &nbsp;
                            <a className="text" href="tel:+91 9510716669">+91 951 071 6669</a>
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: &nbsp;
                            <a className="text" href="mailto:info@ampaliya.com">info@ampaliya.com</a>
                        </div>
                    </div>
                    <div className="c-item">
                        <span className="social-icons">
                            <a href="https://wa.me/+91 9510716669"className="icon">
                                <RiWhatsappFill size={18} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100095405912297" className="icon">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="3" className="icon">
                                <FaTwitter size={16} />
                            </a>
                            <a href="https://www.instagram.com/ampaliya.c" className="icon">
                                <RiInstagramFill size={16} />
                            </a>
                        </span>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="cat-col">
                        <span className="text">Insecticide</span>
                        <span className="text">Fungicides</span>
                        <span className="text">Herbicides</span>
                        <span className="text">Plant Growth Regulator(PGR)</span>
                        <span className="text">Fertilizers</span>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
              <span className="bottom-bar-content">
              © 2023 - Ampaliya Chemicals Pvt. Ltd. All Rights Reserved. | Developed by Erdev.
              </span>
            </div>
        </div>
    );
};

export default Footer;

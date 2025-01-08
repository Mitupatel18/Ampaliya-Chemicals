import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css"; // Add your CSS file for styling
import { FaDownload } from "react-icons/fa6";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import image1 from '../../../Assets/hero/01.jpg';
import image2 from '../../../Assets/hero/02.jpg';
import image3 from '../../../Assets/hero/03.jpg';
import image4 from '../../../Assets/hero/04.jpg';
import image5 from '../../../Assets/hero/05.jpg';
import image6 from '../../../Assets/hero/06.jpg';
import image7 from '../../../Assets/hero/07.jpg';
import image8 from '../../../Assets/hero/08.jpg';

const Hero = () => {
  const navigate = useNavigate();


  // Image slider logic
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ];

  const handleExploreClick = () => {
    navigate("/products");
  };

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-contener">
        <div className="hero-content">
          <h1 className="hero-title">
            Field in Futures.... <br />
            <p className="hero-subtitle">Enhancing Crop Quality,</p>
            <p className="hero-subtitle">Ensuring Farmers'Prosperity</p>
          </h1>
          <p className="hero-description">
            Our mission is to empower farmers by providing them with 
            innovative and effective agrochemical solutions that optimize crop 
            yields, improve quality, and enhance their income. We are 
            committed to fostering agricultural sustainability and contributing 
            to global food security.
          </p>
          <div className="hero-buttons">
            <button className="hero-button" onClick={handleExploreClick}>
              Explore Products
            </button>
            <a
              href="/Assets/brochure/Brochure.pdf"
              download="Amplaliya_Chemicals_Brochure.pdf"
              className="hero-button brochure-button"
            >
              Brochure <FaDownload />
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="tranding-slider-container">
            <Swiper
              grabCursor={false}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="tranding-slider"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="tranding-slide">
                    <img src={src} alt={`Slide ${index + 1}`} className="hero-image" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
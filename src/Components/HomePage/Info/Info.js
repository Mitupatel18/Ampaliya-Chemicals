import React from "react";
import "./Info.css"; // Add your CSS file for styling
import about from '../../../Assets/about/about.jpg'



const Info = () => {

  return (
    <section id="info" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Ampaliya Chemicals</h2>
        <p className="about-introduction">
         Established in <strong>2023</strong>, <strong>Ampaliya Chemicals Private Limited</strong> is a leading player in the agrochemical industry dedicated to enhancing agricultural productivity and promoting sustainable farming practices. We specialize in the manufacturing and distribution of high-quality agrochemical products tailored to meet the diverse needs of farmers worldwide.
        </p>
        <p className="about-details">
        At Ampaliya Chemicals Private Limited, we offer a comprehensive range of agrochemical products, including pesticides, herbicides, fungicides, and plant growth regulators. Our products are formulated using advanced technology and adhere to the highest quality standards to ensure maximum effectiveness and safety.
        </p>
        <p className="about-values">
          <strong>Quality</strong> is at the core of everything we do. We prioritize stringent quality control measures throughout the manufacturing process to deliver products that meet or exceed customer expectations. Our commitment to quality assurance extends to product testing, packaging, and distribution, ensuring consistency and reliability.
        </p>
        <p className="about-support">
        We believe in providing comprehensive support to our customers beyond just product delivery. Our team of agronomic experts and technical professionals are dedicated to offering personalized assistance, agronomic advice, and training programs to help farmers optimize their yields and profitability.
        </p>
      </div>
      <div className="about-image">
        <img
          src={about} // Replace with the actual image URL
          alt="Ampaliya Chemicals"
          className="about-img"
        />
      </div>
    </section>
  );
};

export default Info;
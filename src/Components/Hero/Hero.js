import React, { useState } from "react";
import "./Hero.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
const Hero = () => {
  const image = [
    "https://www.q5infotech.com/wp-content/uploads/2020/09/website-design-and-development.png",
    "https://experts-tec.com/wp-content/uploads/2021/10/professional-web-design-social-ink-professional-web-design-png-1000_813.png",
    "https://litslink.com/wp-content/uploads/2021/03/web-development.png",
    "https://www.proclivitydigitech.com/wp-content/uploads/2020/03/about-us.png",
  ];
  const [srcIndex, setSrcIndex] = useState(0);
  const handleNext = () => {
    if (srcIndex >= image.length - 1) {
      setSrcIndex(0);
    } else {
      setSrcIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (srcIndex === 0) {
      setSrcIndex(image.length - 1);
    } else {
      setSrcIndex((prev) => prev - 1);
    }
  };

  console.log(srcIndex);

  return (
    <div className="hero-container">
      {/* About */}
      <div className="about-container">
        <h1>Web Design</h1>
        <h3>Landing Page</h3>
        <p>
          Web Design refers to the design of websites that are displayed on the
          internet. It usually refers to the user experience aspects of website
          development Web design used to be focused on designing websites for
          desktop browsers; however, since the mid-2010s, design for mobile and
          tablet browsers has become ever-increasingly important
        </p>
        <button className="button-learn">LEARN MORE</button>
        <div className="icons-container-hero">
          <FaFacebookF className="icons-hero" />
          <BsTwitter className="icons-hero" />
          <FiInstagram className="icons-hero" />
        </div>
      </div>
      {/* carousel */}
      <div className="carousel-container">
        <a onClick={handlePrev} className="prev">
          &#10094;
        </a>
        <div className="carousel-picture fade">
          <img
            onClick={handleNext}
            className="carousel-img "
            src={image[srcIndex]}
          ></img>
        </div>
        <a onClick={handleNext} className="next">
          &#10095;
        </a>
      </div>
    </div>
  );
};

export default Hero;

import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react';
import image2 from "../assests/Web designs.jpg";
import image3 from "../assests/Web designg.jpg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p> Im a react front-end developer. I create responsive secure websites for my clients</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container"> 
        <div className="img-stack top">
        <img src={image3} className="img" alt='image' />

        </div>
        <div className="img-stack bottom">
        <img src={image2} className="img" alt='image' />

        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent

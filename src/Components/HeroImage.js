import"./HeroImageStyle.css"
import React from 'react'
import IntroImg from "../assests/pexels-cottonbro-5483071.jpg";
import {Link} from "react-router-dom";
const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
    <img className="Into-img" src={IntroImg}></img>
      </div>
      <div className="content">
        <p>
            Hi, IM A FULLSTACK 
        </p>
        <h1>
        DEVELOPER
        </h1>
      
      <div>
        <Link to="/Project" className="btn">
        Project
        </Link>
        <Link to="/Contact" className="btn-light">
        Contact
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Heroimage

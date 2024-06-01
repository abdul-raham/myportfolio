import "./FooterStyles.css";
import React from 'react'
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";
import Logo from"../assests/9qYWeV-LogoMakr.png";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
    <div className="left">
        <img src={Logo} className="logo"></img>
        <div className="location">
    <FaHome size={20} style={{color: "white", marginRight: "2rem"}} />
    <div>
        <p>
        No 6 Olasoji str, Oko-Oba     
        </p>
        <p>
            Agege
        </p>
    </div>
        </div>
        <div className="phone">
        <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}}  />
        +234 816 449 3128</h4>
        </div>
        <div className="mail">
        <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}} />
        +234 816 449 3128</h4>
        </div>
    </div>
    <div className="right">
        <h4> About me</h4>
            <p>
            This is me Abdulrahman Bakare. CEO of BakareTech . I enjoy discussing new projects and challenges 
            </p>
        <div className="social">
        <Link to="https://web.facebook.com/profile.php?id=100087401101444"><FaFacebook size={30} style={{color: "white", marginRight: "1rem"}} /></Link>
        <Link to="https://www.instagram.com/temitope_temitayo_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram size={30} style={{color: "white", marginRight: "1rem"}} /></Link>
      <Link to="https://x.com/Abdulrah1Bakare"> <FaTwitter size={30} style={{color: "white", marginRight: "1rem"}} /> </Link>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Footer

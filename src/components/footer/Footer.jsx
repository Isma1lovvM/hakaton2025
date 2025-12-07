

import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { TbBrandYoutube } from "react-icons/tb";

function Footer() {
  // Menyu elementlarini massivda saqlaymiz (takror yozmaslik uchun)
  const footerLinks = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/contact", name: "Contact Us" },
    
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* === FOOTER TOP === */}
        <div className="footerTop">
          <div className="footerLogos">
            <NavLink to="/" className="black">
              <h1 className="footerLogo">
                Zoo<span className="gray">.</span>
              </h1>
            </NavLink>
            <span>Gift & Animals Store</span>
          </div>

          <ul className="footerList">
            {footerLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "activee" : "navLink"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* === FOOTER BOTTOM === */}
        <div className="footerBottom">
          <div className="footerBottomLeft">
            <p className="spann">© 2025 Zoo. All rights reserved</p>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms of Use</NavLink>
          </div>

         
        </div>
      </div>
    </footer>
  );
}

export default Footer;

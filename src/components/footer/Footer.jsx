// import React from "react";
// import "./footer.css";
// import { NavLink } from "react-router-dom";

// import { FaInstagram } from "react-icons/fa";
// import { FiFacebook } from "react-icons/fi";
// import { TbBrandYoutube } from "react-icons/tb";

// function Footer() {
//   return (
//     <div className="footer">
//       <div className="container">
//         <div className="footerTop">
//           <div className="footerLogos">
//             <NavLink className={"black"} to={"/"}>
//               <h1 className="footerLogo">
//                 3legant<span className="gray">.</span>
//               </h1>
//             </NavLink>
//             <span>Gift & Decoration Store</span>
//           </div>

//           <ul className="footerList">
//             <NavLink
//               className={({ isActive }) => (isActive ? "activee" : "navLink")}
//               to={"/"}
//             >
//               <p>Home</p>
//             </NavLink>
//             <NavLink
//               className={({ isActive }) => (isActive ? "activee" : "navLink")}
//               to={"/shop"}
//             >
//               <p>Shop</p>
//             </NavLink>
//             <NavLink
//               className={({ isActive }) => (isActive ? "activee" : "navLink")}
//               to={"/blog"}
//             >
//               <p>Blog</p>
//             </NavLink>
//             <NavLink
//               className={({ isActive }) => (isActive ? "activee" : "navLink")}
//               to={"/contact"}
//             >
//               <p>Contact Us</p>
//             </NavLink>
//             <NavLink
//               className={({ isActive }) => (isActive ? "activee" : "navLink")}
//               to={"/signUp"}
//             >
//               <p>Sign Up</p>
//             </NavLink>
//           </ul>
//         </div>

//         <div className="footerBottom">
//           <ul className="footerBottomLeft">
//             <p className="spann">
//               Copyright © 2023 3legant. All rights reserved
//             </p>
//             <p>Privacy Policy</p>
//             <p>Terms of Use</p>
//           </ul>
//           <ul className="footerBottomRight">
//             <FaInstagram className="fntsize" />
//             <FiFacebook className="fntsize" />
//             <TbBrandYoutube className="fntsize" />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

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
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact Us" },
    { path: "/signUp", name: "Sign Up" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* === FOOTER TOP === */}
        <div className="footerTop">
          <div className="footerLogos">
            <NavLink to="/" className="black">
              <h1 className="footerLogo">
                3legant<span className="gray">.</span>
              </h1>
            </NavLink>
            <span>Gift & Decoration Store</span>
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
            <p className="spann">© 2025 3legant. All rights reserved</p>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms of Use</NavLink>
          </div>

          {/* <div className="footerBottomRight">
            <a href="https://instagram.com">
              <FaInstagram className="fntsize" />
            </a>
            <a href="https://facebook.com">
              <FiFacebook className="fntsize" />
            </a>
            <a href="https://youtube.com">
              <TbBrandYoutube className="fntsize" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

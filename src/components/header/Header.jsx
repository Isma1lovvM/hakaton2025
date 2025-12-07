// import React, { useState } from "react";
// import "./header.css";

// import { NavLink } from "react-router-dom";
// import { RiSearchLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { LuTicketPercent } from "react-icons/lu";
// import { FaArrowRight, FaBars } from "react-icons/fa6";
// import { IoCloseOutline } from "react-icons/io5";

// import cartBtn from "../../assets/cartBtn.svg";

// function Header() {
//   const [hideSubHeader, setHideSubHeader] = useState(true);
//   const [hideMenuBar, setHideMenuBar] = useState(false);

//   return (
//     <>
//       {hideSubHeader && (
//         <div className="subHeader">
//           <div className="subHeaderTexts">
//             <LuTicketPercent className="subHeaderTicket" />
//             <p>30% off storewide — Limited time!</p>
//             <NavLink to="/shop">
//               <button className="subBtn">
//                 Shop Now <FaArrowRight />
//               </button>
//             </NavLink>
//           </div>
//           <button
//             onClick={() => setHideSubHeader(false)}
//             className="subHeaderCloseBox"
//           >
//             <IoCloseOutline />
//           </button>
//         </div>
//       )}

//       <header>
//         <div className={`navBox ${!hideSubHeader ? "zero" : ""}`}>
//           <nav className={`navbar ${!hideSubHeader ? "topZero" : ""}`}>
//             <div className="container">
//               <div className="containerTexts">
//                 <div className="logoElBox">
//                   <button onClick={() => setHideMenuBar(true)} className="bar">
//                     <FaBars />
//                   </button>
//                   <NavLink to="/">
//                     <h1 className="logoText">
//                       3legant<span className="gray">.</span>
//                     </h1>
//                   </NavLink>
//                 </div>

//                 <ul className={`navList ${hideMenuBar ? "menuActive" : ""}`}>
//                   <div className="barListBox">
//                     <h3>3legant</h3>
//                     <button
//                       className="closeMenuBtn"
//                       onClick={() => setHideMenuBar(false)}
//                     >
//                       <IoCloseOutline />
//                     </button>
//                   </div>
//                   <li>
//                     <NavLink
//                       to="/"
//                       className={({ isActive }) =>
//                         isActive ? "active" : "navLink"
//                       }
//                       onClick={() => setHideMenuBar(false)}
//                     >
//                       Home
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/shop"
//                       className={({ isActive }) =>
//                         isActive ? "active" : "navLink"
//                       }
//                       onClick={() => setHideMenuBar(false)}
//                     >
//                       Shop
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/blog"
//                       className={({ isActive }) =>
//                         isActive ? "active" : "navLink"
//                       }
//                       onClick={() => setHideMenuBar(false)}
//                     >
//                       Blog
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/contact"
//                       className={({ isActive }) =>
//                         isActive ? "active" : "navLink"
//                       }
//                       onClick={() => setHideMenuBar(false)}
//                     >
//                       Contact Us
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/signUp"
//                       className={({ isActive }) =>
//                         isActive ? "active" : "navLink"
//                       }
//                       onClick={() => setHideMenuBar(false)}
//                     >
//                       Sign Up
//                     </NavLink>
//                   </li>
//                 </ul>

//                 <ul className="navIconsList">
//                   <RiSearchLine className="icon" />
//                   <CgProfile className="icon" />
//                   <HiOutlineShoppingBag className="icon" />
//                   <img className="icon" src={cartBtn} alt="cart button" />
//                 </ul>

//                 {hideMenuBar && (
//                   <div
//                     className="overlay"
//                     onClick={() => setHideMenuBar(false)}
//                   ></div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;

import React, { useState } from "react";
import "./header.css";

import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuTicketPercent } from "react-icons/lu";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

import cartBtn from "../../assets/cartBtn.svg";

function Header() {
  // SubHeader va Menu uchun state
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* === SUB HEADER (Promo Bar) === */}
      {isSubHeaderVisible && (
        <div className="subHeader">
          <div className="subHeaderTexts">
            <LuTicketPercent className="subHeaderTicket" />
            <p>30% off storewide — Limited time!</p>
            <NavLink to="/shop">
              <button className="subBtn">
                Shop Now <FaArrowRight />
              </button>
            </NavLink>
          </div>

          <button
            onClick={() => setIsSubHeaderVisible(false)}
            className="subHeaderCloseBox"
            aria-label="Close promo"
          >
            <IoCloseOutline />
          </button>
        </div>
      )}

      {/* === MAIN HEADER === */}
      <header>
        <div className={`navBox ${!isSubHeaderVisible ? "zero" : ""}`}>
          <nav className={`navbar ${!isSubHeaderVisible ? "topZero" : ""}`}>
            <div className="container">
              <div className="containerTexts">
                {/* === LOGO + MOBILE MENU BUTTON === */}
                <div className="logoElBox">
                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className="bar"
                    aria-label="Open menu"
                  >
                    <FaBars />
                  </button>

                  <NavLink to="/">
                    <h1 className="logoText">
                      3legant<span className="gray">.</span>
                    </h1>
                  </NavLink>
                </div>

                {/* === NAVIGATION LINKS === */}
                <ul className={`navList ${isMenuOpen ? "menuActive" : ""}`}>
                  {/* MOBILE HEADER INSIDE MENU */}
                  <div className="barListBox">
                    <h3>3legant</h3>
                    <button
                      className="closeMenuBtn"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <IoCloseOutline />
                    </button>
                  </div>

                  {[
                    { path: "/", name: "Home" },
                    { path: "/shop", name: "Shop" },
                    { path: "/blog", name: "Blog" },
                    { path: "/contact", name: "Contact Us" },
                    { path: "/signUp", name: "Sign Up" },
                  ].map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "active" : "navLink"
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                {/* === ICONS (Right Side) === */}
                <ul className="navIconsList">
                  <RiSearchLine className="icon" aria-label="Search" />
                  <CgProfile className="icon" aria-label="Profile" />
                  <HiOutlineShoppingBag className="icon" aria-label="Cart" />
                  <img
                    className="icon"
                    src={cartBtn}
                    alt="cart button"
                    aria-label="Cart button"
                  />
                </ul>

                {/* === OVERLAY (for mobile menu) === */}
                {isMenuOpen && (
                  <div
                    className="overlay"
                    onClick={() => setIsMenuOpen(false)}
                  ></div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

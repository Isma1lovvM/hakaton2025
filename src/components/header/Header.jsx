

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

  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      
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
                      Zoo<span className="gray">.</span>
                    </h1>
                  </NavLink>
                </div>

                {/* === NAVIGATION LINKS === */}
                <ul className={`navList ${isMenuOpen ? "menuActive" : ""}`}>
                  {/* MOBILE HEADER INSIDE MENU */}
                  <div className="barListBox">
                    <h3>Zoo</h3>
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
                    { path: "/contact", name: "Contact Us" },
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

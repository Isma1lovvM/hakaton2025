import React from "react";
import Belive from "../../components/belive/Belive";
import SalePrice from "../../components/salePrice/SalePrice";
import AboutUs from "../../components/aboutUs/AboutUs";
import ContactSection from "../../components/contactSection/ContactSection";

function Contact() {
  return (
    <div className="container">
      <Belive />
      <AboutUs />
      <ContactSection />
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import { BiStore } from "react-icons/bi";
import "./ContactSection.css";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const BOT_TOKEN = "8182678229:AAHYZEobWFh_wrbjPt2QJkAak3RreFhSYoQ";
  const CHAT_ID = "6904315508";

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Foydalanuvchidan Xabar: %0A%0A";
    text += `Ismi: ${name}%0A`;
    text += `Email Addresi: ${email}%0A`;
    text += `Telefon Nomeri: ${number}%0A`;
    text += `Xabari: ${message}%0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setEmail("");
    setMessage("");
    setName("");
    setNumber("");
  };

  return (
    <div className="container">
      <div className="contactSectionBox">
        <div className="sectionTop">
          <h2 data-aos="zoom-in-down" className="contactUsBigText">
            Contact Us
          </h2>
          <div className="sectionTopCarsList">
            <div className="sectionTopCartItem">
              <BiStore className="sectionTopCartItemImgs" />
              <h3>ADDRESS</h3>
              <p>234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
            </div>
            <div className="sectionTopCartItem">
              <LuPhone className="sectionTopCartItemImgs" />
              <h3>CONTACT US</h3>
              <p>+998 93 447 89 84</p>
            </div>
            <div className="sectionTopCartItem">
              <HiOutlineMail className="sectionTopCartItemImgs" />
              <h3>EMAIL</h3>
              <p>isma1lovv.m.h.n@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="sectionBottom">
          <form onSubmit={handleSubmit} action="" className="sectionBottomForm">
            <div className="sectionFormContentsBox">
              <h3>FULL NAME</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sectionFormContentsBox">
              <h3>EMAIL ADDRESS</h3>
              <input
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sectionFormContentsBox">
              <h3>PHONE NUMBER</h3>
              <input
                type="text"
                placeholder="Your Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="sectionFormContentsBox">
              <h3>MESSAGE</h3>
              <textarea
                rows={5}
                name=""
                id=""
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="sectionBottomBtn">Send Message</button>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.811631784925!2d69.21295457587591!3d41.33470927130657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfe2c9dfdb7%3A0x4e70e6b88f98e874!2sMARS%20IT%20Tinchlik!5e0!3m2!1sru!2s!4v1759491837457!5m2!1sru!2s"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

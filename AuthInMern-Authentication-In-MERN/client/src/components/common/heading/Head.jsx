import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTimes,
  FaBars,
} from "react-icons/fa";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <div className="imagelogo"></div>
          </div>
          <div className="buttons">
            <a href="/form">
              <button className="sell">Become a seller</button>
            </a>
            <a href="/login">
              <button className="login">Log In</button>
            </a>
            <a href="/signup">
              <button className="signup">Create Account</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;

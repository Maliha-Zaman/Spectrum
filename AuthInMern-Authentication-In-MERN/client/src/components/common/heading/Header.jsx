import React, { useState } from "react";
import Head from "./Head";
// import searchToggle from "./search";
import "./header.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    // function searchToggle(obj, evt) {
    //   var container = obj.closest(".search-wrapper");
    //   if (!container.hasClass("active")) {
    //     container.addClass("active");
    //     evt.preventDefault();
    //   } else if (
    //     container.hasClass("active") &&
    //     obj.closest(".input-holder").length == 0
    //   ) {
    //     container.removeClass("active");
    //     // clear input
    //     container.find(".search-input").val("");
    //   }
    // },
    <>
      <Head />

      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            {/*  */}

            {/*  */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stores">Stores</Link>
            </li>
            {/* <li><Link to="/pricing">Popular</Link></li> */}
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>

            {/* <li>
              <div class="search-wrapper">
                <div class="input-holder">
                  <input
                    type="text"
                    class="search-input"
                    placeholder="Type to search"
                  />
                  <button
                    class="search-icon"
                    onclick="searchToggle(this, event);"
                  >
                    <span></span>
                  </button>
                </div>
                <span class="close" onclick="searchToggle(this, event);"></span>
              </div>
            </li> */}
            {/* <li><Link to="/journal">Journal</Link></li> */}
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
          {/* <div className="search">
            <div className="search-box f_flex">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search and hit enter..." />
            </div>
          </div> */}

          <div className="start">
            {/* <div className="button"></div> */}
            <form action="">
              <input type="search" placeholder="Search here ..." />
              <i class="fa fa-search"></i>
            </form>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <div>
                <FaTimes />
              </div>
            ) : (
              <div>
                <FaBars />
              </div>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;

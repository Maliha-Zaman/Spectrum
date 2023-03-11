import React from "react"
import { blog } from "../../dummydata"
import "./footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTimes, FaBars } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box-logo'>
            <h1>Spectrum</h1>
            <span>Online shops</span>
            <p>Surf    Shop     Enjoy</p>
          </div>
          <div className='box-link'>
            <h3>Quick Links</h3>
            <ul>
              <a href='/about'><li>About us</li></a>
              <a href='/store'><li>Store</li></a>
              <a href='/team'><li>Team</li></a>
            </ul>
          </div>
          <div className='box-last'>
            <h3>Contact Information</h3>
            <ul>
              <li>IUT, Board Bazaar, Gazipur, Dhaka</li>
              <li>+8801752224639</li>
              <li>ittehadrahman@iut-dhaka.edu</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

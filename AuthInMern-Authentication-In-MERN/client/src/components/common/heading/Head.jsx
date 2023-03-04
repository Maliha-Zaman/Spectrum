import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTimes, FaBars } from "react-icons/fa"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className="container flexSB">
            <div className="logo">
                <div className='imagelogo'>
                </div>
                {/* <span>ONLINE SHOP TO GET IT ALL</span> */}
            </div>
            <div className="buttons">
              <a href='/login'><button className='login'>Log In</button></a>
              <a href='/signup'><button className='signup'>Create Account</button></a>
            </div>
            {/* <div className='social'>
                <div className="icon"><FaFacebook /></div>
                <div className="icon"><FaYoutube /></div>
                <div className="icon"><FaInstagram /></div>
                <div className="icon"><FaTwitter /></div>
            </div> */}
        </div>
      </section>
    </>
  )
}

export default Head

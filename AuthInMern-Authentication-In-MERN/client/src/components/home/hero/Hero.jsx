import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'
import { FaLongArrowAltRight } from "react-icons/fa"

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='Welcome to Spectrum' title="Best online shop"/>
                    <p>Spectrum offers you with all your favourite social media pages under a common roof.</p>
                    <p>Surf     Shop        Enjoy!!</p>
                    <div className="button">
                        {/* <button className="primary-btn">
                            GET STARTED NOW <FaLongArrowAltRight />
                        </button>
                        <button className="primary-btn1">
                            VIEW PRODUCTS <FaLongArrowAltRight />
                        </button> */}
                    </div>
                </div>
            </div>    
        </section>    
        <div className="marigin"> </div>
    </>
  )
}

export default Hero

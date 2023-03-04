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
                    <Title subtitle='Welcome to Sprectrum' title="Best online shop"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor repudiandae ab exercitationem similique harum architecto consequatur rem. Corrupti odit expedita atque pariatur hic mollitia dignissimos blanditiis maiores deserunt et?</p>
                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOW <FaLongArrowAltRight />
                        </button>
                        <button className="primary-btn1">
                            VIEW PRODUCTS <FaLongArrowAltRight />
                        </button>
                    </div>
                </div>
            </div>    
        </section>    
        <div className="marigin"></div>
    </>
  )
}

export default Hero

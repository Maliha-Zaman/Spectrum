import React from 'react'
import Back from '../common/back/Back'
import Footer from '../footer/Footer'
import Header from '../common/heading/Header'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <>
        <Header />
        <Back title='About Us'/>
        <AboutCard />
        <Footer />
    </>
  )
}

export default About

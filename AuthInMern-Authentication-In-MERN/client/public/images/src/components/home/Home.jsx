import React from 'react'
import Hero from './hero/Hero'
import Header from '../common/heading/Header'
import AboutCard from '../about/AboutCard'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <AboutCard />
        <Footer />
    </>
  )
}

export default Home

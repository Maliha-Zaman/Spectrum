import React from "react"
import Back from "../common/back/Back"
import Header from "../common/heading/Header"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/AWrapper"
import "../about/about.css"
import Footer from "../footer/Footer"

const Team = () => {
  return (
    <>
        <Header />
        
      
        <div>
          <section className='back2'>
              <h2>Home / Team</h2>
              <h1>Team</h1>
          </section>
          <div className="marigin"></div>
        </div>
      
      

      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      
      {/* <Awrapper /> */}
      <Footer />

    </>
  )
}

export default Team
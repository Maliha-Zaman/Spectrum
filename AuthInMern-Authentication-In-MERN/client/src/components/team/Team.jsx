import React from "react"
import Back from "../common/back/Back"
import Header from "../common/heading/Header"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/AWrapper"
import "../about/about.css"

const Team = () => {
  return (
    <>
        <Header />
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
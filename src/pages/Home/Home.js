import React from 'react'
import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"
import CoreValue from "../../components/CoreValue/CoreValue"
import AboutUs from "../../components/AboutUs/AboutUs"

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Services/> 
      <CoreValue /> 
    </div>
  )
}

export default Home
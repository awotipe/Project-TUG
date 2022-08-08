import React from 'react'
import Logo from "../../asset/Airport 2 1.svg"
import Classes from "./ServiceHero.module.css"

const ServiceHero = () => {
  return (
    <div className={Classes.ServiceHero}>
        <img src={Logo} alt="/" />
      <div className={Classes.overlay}></div>
      <div className={Classes.content}>
            <h1>Our Services</h1>
           <p>
             HOME/ OUR SERVICES
             </p>
           </div>
    </div>
  )
}

export default ServiceHero
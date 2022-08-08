import React from 'react'
import Classes from "./ContactHero.module.css";
import Logo from "../../asset/contact-img.svg";

const ContactHero = () => {
  return (
    <div className={Classes.ContactHero}>
      <img src={Logo} alt="/" />
      <div className={Classes.overlay}></div>
      <div className={Classes.content}>
            <h1>Contact Us</h1>
           <p>
             HOME/ CONTACT US
             </p>
           </div>
    </div>
  )
}

export default ContactHero
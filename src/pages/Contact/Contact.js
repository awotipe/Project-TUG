import React from 'react'
import Classes from "./Contact.module.css"
import ContactHero from "../../components/ContactHero/ContactHero"
import ContactForm from "../../components/ContactForm/ContactForm"

const Contact = () => {
  return (
    <div className={Classes.Contact}> 
      <ContactHero/>
      <ContactForm/>
    </div>
  )
}

export default Contact
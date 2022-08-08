import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import Classes from "./Whatsappchat.module.css"

const Whatsappchat = () => {
  return (
    <div className={Classes.Whatsappchat}>
        <a href="https://wa.me/message/5N5WVJDTALXGC1">
        <FaWhatsappSquare className={Classes.icon} />
        <p>chat </p>
        </a>
    </div>
  )
}

export default Whatsappchat
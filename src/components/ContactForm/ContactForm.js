import React, { useRef, useState } from "react";
import Classes from "./ContactForm.module.css";
import Logo from "../../asset/send-img.svg";
import emailjs from '@emailjs/browser';
const Result = () => {
  return (
    <p>Your message has been successfully sent.We will contact you soon.</p>
  );
};
const ContactForm = () => {
  const [result, showResult] = useState (false, true)
  const form = useRef ()
  const sendEmail = (e) => {
    e.preventDefault();
    
      emailjs.sendForm("service_ei6kz8m", "template_49kc0ag", form.current, "ZzQ9T60CgoDKkrhzK")
      .then(
        (result) => {
          console.log(result.text);
          console.log("Your message has been successfully sent.We will contact you soon.")
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
   },5000 );
  return (
    <div className={Classes.ContactForm}>
      <div className={Classes.ContactForm1}>
        <div className={Classes.address}>
          <h2>Our Office</h2>
        </div>
        <div className={Classes.address}>
          <h3>Address</h3>
          <p>8, Safebirth street, Fadeyi, Lagos.</p>
        </div>
        <div className={Classes.address}>
          <h3>Phone Numbers</h3>
          <p>+2349124939094, +2347033181161</p>
        </div>
        <div className={Classes.address}>
          <h3>Website</h3>
          <p>www.unbreakablegraceconsultancy.com</p>
        </div>
        <div className={Classes.address}>
          <h3>Email</h3>
          <p>unbreakablegraceconsultancy@gmail.com</p>
        </div>
      </div>
      <div className={Classes.ContactForm2}>
      <div className={Classes.address}>
          <h2>Drop A Message</h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="firstName" placeholder="First Name"></input>
          <input type="text" name="firstName" placeholder="Last Name"></input>
          <input type="text"  name="email" placeholder="Email "></input>
          <input type="text" name="phone" placeholder="Phone "></input>
          <input type="text" placeholder="Subeject "></input>
         
          <div>
            
            <textarea className={Classes.formcontrol} name="message"
            placeholder="message " required></textarea>
            <br />
            <button className={Classes.btn}>
              <img src={Logo} alt="/" />
              <p>SEND</p>
            </button>
          </div>
          <div className={Classes.row}>{result ? <Result /> : null}</div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

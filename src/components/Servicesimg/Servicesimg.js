import React from "react";
import Classes from "./Servicesimg.module.css";

const Servicesimg = ({ bgImg, text, content }) => {
  return (
    <div className={Classes.servicesimg1}>
      <div className={Classes.servicesimg}>
        <img src={bgImg} alt="/" />
        <div className={Classes.overlay}>
          <p>{text}</p>
        </div>
      </div>
      <div className={Classes.content}><p>{content}</p></div>
    </div>
  );
};

export default Servicesimg;

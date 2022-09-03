import React from "react";
import classes from "./AboutUs.module.css";
import About from "../../asset/about-img-border.svg";
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.innerContainer}>
        <div className={classes.text}>
          <h2>About Us</h2>
          <p>
            The Unbreakable-Grace Consultancy Ltd is a new international
            consultancy known for its loyalty, respect, patience, quality,
            honesty, and quality. Our goal is to connect people to
            opportunities, provide them with international study offers (young
            and old), reduce the rate of illiteracy, and connect them to
            breakthroughs, goods, and services in the major life areas. We
            provide human scope and international exams, education, and
            immigration services to people worldwide.
          </p>
          <Link to="/about">
          <button>Learn More</button>
          </Link>
        </div>
        <div className={classes.image}>
          <img src={About} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

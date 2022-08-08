import React from "react";
import classes from "./About.module.css";
import about from "../../asset/About.svg";

const About = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.innerContainer}>
        <div className={classes.text}>
          <h1>About Us</h1>
          <p>Home/About Us</p>
        </div>
        <img src={about} alt="/" />
        <div className={classes.overlay}></div>
      </div>
      <div className={classes.aboutContainer}>
        <div className={classes.upperText}>
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
        </div>
        <div className={classes.goal}>
          <h3>OUR GOALS</h3>
          <li>
            To bring quality and affordable education to people in the whole
            Africa.
          </li>
          <li>
            To serve as the connection connecting people to scholarship offers
            available globally.
          </li>
          <li>
            To facilitate students intellectual growth by exposing them to
            knowledge
          </li>
        </div>
        <div className={classes.value}>
          <h3>
            CORE VALUES: <span>Loyalty, Excellence</span>
          </h3>
        </div>
        <div className={classes.vision}>
          <h3>
            OUR VISION:{" "}
            <span>Develop Independence, Self-confidence and Flexibility</span>
          </h3>
        </div>
        <div className={classes.target}>
          <h3>BUSINESS TARGET FOR 2022</h3>
          <p>
            We shall be targeting recruiting at least 100 students to study in
            the United State, 100 students to study in the UK, minimum of 500
            students to study in Europe and 200 students to study in the Asia.
            This is our basic business target for this year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

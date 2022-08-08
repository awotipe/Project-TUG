import React from "react";
import classes from "./Partners.module.css";
import Logo1 from "../../asset/cyprus-university.svg";
import Logo2 from "../../asset/halic-university.svg";
import Logo3 from "../../asset/medipol-university.svg";
import Logo4 from "../../asset/european-university.svg";
import Logo5 from "../../asset/rauf-university.svg";
import Logo6 from "../../asset/University-warschaw.svg";

const Partners = () => {
  return (
    <div className={classes.main}>
      <div className={classes.innerContainer}>
        <div className={classes.text}>
          <h2>Our Few Partner Institutions </h2>
        </div>
        <div className={classes.partnerslogo}>
          <img src={Logo1} alt="/" className={classes.footlogo} />
          <img src={Logo2} alt="/" className={classes.footlogo} />
          <img src={Logo3} alt="/" className={classes.footlogo} />
          <img src={Logo4} alt="/" className={classes.footlogo} />
          <img src={Logo5} alt="/" className={classes.footlogo} />
          <img src={Logo6} alt="/" className={classes.footlogo} />
        </div>
      </div>
    </div>
  );
};

export default Partners;

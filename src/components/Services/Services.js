import React from "react";
import Classes from "./Services.module.css";
import Logo from "../../asset/graduation-cap-money.svg";
import Logo1 from "../../asset/passport-img.svg";
import Logo2 from "../../asset/career-coaching.svg";
// import Logo3 from "../../asset/carousel-graduating-img.svg";
import Servicesimg from "../Servicesimg/Servicesimg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className={Classes.servicesContainer}>
      <div>
        <h2>We Offer Best Services</h2>
      </div>
      <div className={Classes.services}>
        <Servicesimg
          bgImg={Logo}
          text="Low Tuition Study Destination"
          content="We are interested in helping you get a pocket-friendly offer of low tuition fees.  We will(with the client’s budget) get a suitable, quality, and affordable study country,"
        />
        <Servicesimg
          bgImg={Logo2}
          text="Career Coaching & Counselling"
          content="We give counsel on how things should be properly done, for a successful career, for excellence, and for a worthwhile experience that will place you on top of your career."
        />
        <Servicesimg
          bgImg={Logo1}
          text="Visa Advisory"
          content="Giving the best advice on a successful visa application. Help with all documentation needed, give detailed information that gives favorable outcome and towards visa approvals."
        />
      </div>
      <div className={Classes.seeAll}>
        <Link to="services">
        <h4>SEE ALL</h4>
        </Link>
      </div>
    </div>
  );
};

export default Services;

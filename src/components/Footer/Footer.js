import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../asset/logo-white.svg";
import Logo1 from "../../asset/Facebook.svg";
import Logo2 from "../../asset/Instagram.svg";
import Logo3 from "../../asset/Twitter.svg";
import Location from "../../asset/location.svg";
import Whatsapp from "../../asset/Whatsapp.svg";
import Phone from "../../asset/phone.svg";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className={classes}>
      <div className={classes.footercontainer}>
        <div className={classes.flexcontainer}>
          <div className={classes.part1}>
            <Link to="/">
              <img src={Logo} alt="/" className={classes.footlogo} />
            </Link>
            <p>
              TUG Consultancy is a new International consultancy poised at
              connecting people to opportunities, provide them with
              international study offers.
            </p>
            <div className={classes.address}>
              <div className={classes.location}>
                <a href="https://www.google.com/maps/place/8+Safebirth+St,+Fadeyi+102215,+Lagos/@6.5278426,3.3646269,17z/data=!3m1!4b1!4m5!3m4!1s0x103b8db24ddf5aa7:0x23d15157e56801de!8m2!3d6.5278373!4d3.3668156">
                  <img src={Location} alt="/" className={classes.image} />
                  <p>8, Safebirth Street, Fadeyi Lagos, Nigeria.</p>
                </a>
              </div>
              <div className={classes.location}>
                <img src={Phone} alt="/" className={classes.image} />
                <p>+2347033181161</p>
              </div>
              <div className={classes.location}>
                <img src={Whatsapp} alt="/" className={classes.image} />
                <p>+2349124939094, +2347033181161</p>
              </div>
            </div>
          </div>

          <div className={classes.part}>
            <div className={classes.part2}>
              <h3>Quick Links</h3>
                <p>Home</p>
                <p>About Us</p>
                <p>Contact</p>
                <p>Our Services</p>
            </div>
            <div className={classes.part2}>
              <h3>Follow us</h3>
              <img src={Logo1} alt="/" className={classes.social} />
              <img src={Logo2} alt="/" className={classes.social1} />
              <img src={Logo3} alt="/" className={classes.social1} />
            </div>

            <div className={classes.part2}>
              <h3>Email</h3>
              <p>info@tugconsultancyltd.org</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.line2}></div>

      <div className={classes.copyright}>
        <p>© 2022 TUG Consultancy Limited</p>
      </div>
    </footer>
  );
};

export default Footer;

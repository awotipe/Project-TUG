import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Logo from "../../asset/logo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

import Classes from "./Navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  

  return (
    <div className={Classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="/" />
        </Link>
      </div>
      <ul className={Classes.navMenu}>
        <li>
          <Link to="/" className={Classes.navlink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={Classes.navlink}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className={Classes.navlink}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/services" className={Classes.navlink}>
            Our Services
          </Link>
        </li>
      </ul>
      <div className={Classes.navIcons}>
        <FaFacebook className={Classes.icon} />
        <FaInstagram className={Classes.icon} />
        <FaTwitter className={Classes.icon} />
      </div>
      <div className={Classes.hamburger} onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className={classes.Icons} />
        ) : (
          <AiOutlineClose className={classes.Icons} />
        )}
       
      </div>
      <div className={nav ? Classes.active : Classes.mobileMenu}>
        <ul className={Classes.mobileNav}>
          <li>
            <Link to="/" className={Classes.navlink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={Classes.navlink}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className={Classes.navlink}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/services" className={Classes.navlink}>
              Our Services
            </Link>
          </li>
        </ul>
        <div className={Classes.mobileMenuBottom}>
          <div className={Classes.menuIcons}>
            <a href="http://wa.link/za74gk">
            <button>click to chat on whatsapp</button>
            </a>
          </div>
          <div className={Classes.socialIcons}>
            <FaFacebook className={Classes.icon} />
            <FaInstagram className={Classes.icon} />
            <FaTwitter className={Classes.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

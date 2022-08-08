import Classes from "./Hero.module.css";
import Logo from "../../asset/carousel-img-1.svg";
import Logo1 from "../../asset/carousel-img-2.svg";
import React, { Component } from "react";
import Slider from "react-slick";



export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1,
      autoplaySpeed: 5000,
      cssEase: "linear",
     
      
    
    };
    return (
      <div  className={Classes.hero}>
        
        <Slider {...settings}>
          
        <div className={Classes.hero}>
          <img src={Logo} alt="/" className={Classes.heroimg} />
         <div className={Classes.overlay}></div>
          <div className={Classes.content}>
            <h1>Welcome to The Unbreakable-Grace Consultancy LTD</h1>
           <p>
              TUG Consultancy is a new International consultancy poised at
              connecting people to opportunities and to bring them international
              study offers.
             </p>
           </div>
          </div>
          
          <div className={Classes.hero}>
          <img src={Logo1} alt="/" className={Classes.heroimg} />
         <div className={Classes.overlay}></div>
          <div className={Classes.content2}>
            <h1>Study Abroad With Ease!!!</h1>
           <p>
              We help you through every step of the process to study abroad.
             </p>
           </div>
          </div>
          
          
        </Slider>
      </div>
    );
  }
}

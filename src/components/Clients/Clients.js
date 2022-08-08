import classes from "./Clients.module.css";
import Picture1 from "../../asset/Client1.svg";
import Picture2 from "../../asset/Client2.svg";
import Picture3 from "../../asset/Client3.svg";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Clients extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      // centerPadding: "400px",
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 2000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={classes.main}>
        <h2>What Our Clients Say About Us</h2>
        <Slider {...settings} className={classes.innerContainer}>
          <div className={classes.contain}>
            <div className={classes.card}>
              <div className={classes.innerCard}>
                <p>
                  TUG Consultancy is one of the best agencies in Nigeria. They
                  have the best services and they are also transparent,
                  hospitable and professional. I will recommend TUG consultancy
                  for anyone who wants to travel and study abroad.
                </p>
              </div>
              <div className={classes.image}>
                <img src={Picture1} alt="" />
              </div>
              <div className={classes.text2}>
                <p>Oloruntola Tobiloba</p>
              </div>
            </div>
          </div>

          <div className={classes.contain}>
            <div className={classes.card}>
              <div className={classes.innerCard}>
                <p>
                  I'm grateful I made my admission process to study abroad with
                  TUG consultancy, they put me through proper steps and I am
                  happy, there is a difference in my life today.
                </p>
              </div>
              <div className={classes.image}>
                <img src={Picture2} alt="" />
              </div>
              <div className={classes.text2}>
                <p>Obi Grace</p>
              </div>
            </div>
          </div>

          <div className={classes.contain}>
            <div className={classes.card}>
              <div className={classes.innerCard}>
                <p>
                  I found out about TUG consultancy from a friend. I reached out
                  to them after that and they have been wonderful all through my
                  application processing.
                </p>
              </div>
              <div className={classes.image}>
                <img src={Picture3} alt="" />
              </div>
              <div className={classes.text2}>
                <p>Joseph Adeleke</p>
              </div>
            </div>
          </div>

          <div className={classes.contain}>
            <div className={classes.card}>
              <div className={classes.innerCard}>
                <p>
                  I found out about TUG consultancy from a friend. I reached out
                  to them after that and they have been wonderful all through my
                  application processing.
                </p>
              </div>
              <div className={classes.image}>
                <img src={Picture3} alt="" />
              </div>
              <div className={classes.text2}>
                <p>Joseph Adeleke</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

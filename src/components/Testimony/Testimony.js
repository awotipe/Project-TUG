import React, { Component } from "react";
import Slider from "react-slick";
import style from "./Testimony.modules.css"

export default class PauseOnHover extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
      return (
            <div className="testimonial">
                <div className="testimony">
                    <h2>Testimonials</h2>
                    <div></div>
                </div>
                <Slider  {...settings} >
                        <div className="testimonies">
                            <p>"I came across Jassper Enterprise through a friends page ans since I have been patronizing they are very reliable and fast 'good customer services and polite attendance ' big ups to them, u guys should try them out too you won't regret it"</p>
                        </div>
                        <div className="testimonies">
                            <p>"She came across Jassper Enterprise through a friends page ans since I have been patronizing they are very reliable and fast 'good customer services and polite attendance ' big ups to them, u guys should try them out too you won't regret it"</p>
                        </div>
                        <div className="testimonies">
                            <p>"we came across Jassper Enterprise through a friends page ans since I have been patronizing they are very reliable and fast 'good customer services and polite attendance ' big ups to them, u guys should try them out too you won't regret it"</p>
                        </div>
                </Slider>
                <h4 className="tobbey">Tobbey</h4>
            </div>
        )
    }
}
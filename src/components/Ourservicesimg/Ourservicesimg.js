import React from 'react'
import Classes from "./Ourservicesimg.module.css";
import Logo from "../../asset/study.svg";
import Logo1 from "../../asset/advisory visa.svg";
import Logo2 from "../../asset/coaching.svg";
import Logo3 from "../../asset/scholarship image.svg";
import Logo4 from "../../asset/ticket image.svg";
import Logo5 from "../../asset/private coaching.svg";
import Logo6 from "../../asset/exam image.svg";
import Logo7 from "../../asset/immigration.svg";
import Servicesimg from "../Servicesimg/Servicesimg";

const Ourservicesimg = () => {
  return (
    <div className={Classes.Ourservicesimg}>
        <div className={Classes.Ourservicesimg1}>
        <Servicesimg
          bgImg={Logo}
          text="Low Tuition Study Destination"
          content="We are interested in helping you get a pocket-friendly offer of low tuition fees.  We will(with the client’s budget) get a suitable, quality, and affordable study country,"
        />
        <Servicesimg
          bgImg={Logo2}
          text="Career Coaching & Counselling"
          content="We give counsel on how thiings should be properly done, for a successful career, for excellence, and for a worthwhile experience that will place you on top of your career."
        />
        <Servicesimg
          bgImg={Logo1}
          text="Visa Advisory"
          content="Giving the best advice on a successful visa application. Help with all documentation needed, give detailed information that gives favorable outcome and towards visa approvals."
        />
        <Servicesimg
          bgImg={Logo3}
          text="Scholarship to Study Abroad"
          content="It is not news anymore that there are opportunities to study abroad based on scholarships. We help in getting scholarships on tuition/partial scholarships to study abroad."
        />
        <Servicesimg
          bgImg={Logo4}
          text="Ticketing"
          content="Talking about tickets, we help in the booking of international and local flight."
        />
        <Servicesimg
          bgImg={Logo5}
          text="Private Coaching & Counselling"
          content="Private coaching is a client-driven process which means that you can work on anything that you feel you need support within your carrer or life. We take an inside-out approach to spend the time to get to know you and give everything about you a touch of excellence. with us, there is  no set-back."
        />
        <Servicesimg
          bgImg={Logo6}
          text="Int’l Exams Registration & Preparation"
          content="We deal with international examinations such as TOEFL, SAT, IELTS, GRE, etc. We also help in preparing you adequately."
        />
         <Servicesimg
          bgImg={Logo7}
          text="Immigration Travel"
          content="We help you with your traavelling proccess with any country of your choice."
        />
        </div>
    </div>
  )
}

export default Ourservicesimg
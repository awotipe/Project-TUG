import React from "react";
import Classes from "./CoreValue.module.css";
import Logo from "../../asset/loyalty-value-img.svg";
import Logo1 from "../../asset/excellence-value-img.svg";
import Logo2 from "../../asset/communication-value-img.svg";
import Corevalueimg from "../../components/Corevalueimg/Corevalueimg";

const CoreValue = () => {
  return (
    <div className={Classes.CoreValue}>
        <div><h2>Our Core values</h2>  </div>
        <div  className={Classes.CoreValueContainer}>  
      <Corevalueimg
        bgImg={Logo}
        header="Loyalty"
        text="For us as a company, it is very important that
              the information provided to our customers is
              honest and true. This value is, what makes us
              different and helps us to  make decisions
              based on firm and true facts."
      />
      <Corevalueimg
        bgImg={Logo1}
        header="Excellence"
        text="We provide services that constantly 
              meet and occasionally even exceed customer’s expectations."
      />
      <Corevalueimg
        bgImg={Logo2}
        header="Communication"
        text="Each one of us must interact transparently
             and appropriately, trying to strengthen our
             interpersonal relations and the image of
             the company."
      />
      </div>
    </div>
  );
};

export default CoreValue;

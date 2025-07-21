import React from "react";
import serviceImg from "../asset/Image (46).png";
import Btn from "./Btn";
function Services() {
  return (
    <div className="border-y-[0.05em] py-[6em]  ">
      <div className="flex  m-auto w-[80%] justify-between items-center ">
        
          <img
            src={serviceImg}
            alt="service image"
            className="object-fill max-w-full"
          />
        
        <div className="flex flex-col gap-4  items-start w-[60%]">
          <h3 className="headerStyle">Try Our Service</h3>
          <span className="subHeading s">Your skin diagnosis in 3 minutes</span>
          <span className="text-xl font-light w-[50%]">
            Say hello to a more radiant, healthier you with personalized
            skincare that's as unique as you are.
          </span>
          <Btn btnText={"Start my Diagnosis"} />
        </div>
      </div>
    </div>
  );
}

export default Services;

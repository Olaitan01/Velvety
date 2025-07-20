import React from "react";

function About() {
  return (
    <div className="flex flex-col gap-y-[6em] m-auto w-[80%]">
      <div className="flex flex-row justify-between items-start ">
        <div className="flex flex-col gap-y-8 w-[100%]">
          <h3 className="text-2xl font-light">About us</h3>
          <span className="text-3xl font-semibold w-[70%]">
            Velvety facial and skincare company
          </span>
        </div>
        <div className="flex flex-col gap-y-8 w-[100%]">
          <p className="aboutText">
            Velvety is an indigenous company that specializes in the manufacture
            and development of facial and skincare products using the medicinal
            properties of the traditional First Nations pharmacopoeia, with a
            concern for sustainable development.
          </p>
          <p className="aboutText">
            The products offered, whose benefits have been scientifically
            confirmed, are 100% natural and allow you to take care of your body
            and mind: calming teas, energizing infusions, anti-inflammatory
            essential oils, anti-age soaps and creams, etc.
          </p>
        </div>
      </div>
      <hr className="h-0.5 bg-[#e4ece0]" />
    </div>
  );
}

export default About;

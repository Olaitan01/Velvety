import React from "react";
import giftBox from "../asset/Container (4).png";
import groupIcon from "../asset/Container (5).png";
import sparkleIcon from "../asset/Container (6).png";
import Btn from "./Btn";
function Perks() {
  const perk = [
    {
      img: giftBox,
      heading: "Loyalty Program",
      desc: "For Happy Skin",
      btnText: "Join the program",
    },
    {
      img: groupIcon,
      heading: "Organic beauty is shared",
      desc: "Sponsor those you love!",
      btnText: "Refer a Friend",
    },
    {
      img: sparkleIcon,
      heading: "Treat yourself to good weather",
      desc: "At Maison Absolution",
      btnText: "Try Our Treatments",
    },
  ];
  return (
    <div className="flex flex-row justify-between items-center w-[90%] m-auto text-center py-[6em]">
      {perk.map(({ img, heading, btnText, desc }, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center gap-2 p-[6em]  ${
            heading !== "Treat yourself to good weather"
              ? "border-r-[0.05em] border-[#3c5d39]"
              : "border-none "
          }`}
        >
          <img
            src={img}
            alt={heading}
            className="object-fill max-w-full pb-[2em]"
          />
          <h4>{heading}</h4>
          <span className="text-2xl font-semibold">{desc}</span>
          <Btn btnText={btnText} />
          
        </div>
      ))}
    </div>
  );
}

export default Perks;

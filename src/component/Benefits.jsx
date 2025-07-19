import React from "react";
import herbs from "../asset/PNG file 1 (2).png";
import organic from "../asset/Organic.png";
import skin from "../asset/skin 1.png";
import serum from "../asset/serum 3.png";

function Benefits() {
  const benefit = [
    {
      img: organic,
      tagLine: "100% Organic",
      desc: "We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms.",
    },
    {
      img: skin,
      tagLine: "Fits your Skin",
      desc: "I’ts all natural and processed based on traditional knowledge with modern technology.",
    },
    {
      img: serum,
      tagLine: "Easy to use",
      desc: "Packed with a unique design as well as usefull that can help you perform routine skin care.",
    },
  ];

  return (
    <div>
      <div className="flex flex-row justify-center items-stretch ">
      <div className=" p-[6em] w-[100%] flex flex-col gap-[61px] justify-center items-center ">
        <h2 className="text-5xl font-medium text-center ">
          Inspired by traditional Knowledge and nature
        </h2>
        <img src={herbs} alt="herbs" className="max-w-full object-fill" />
      </div>
      <div className="w-[100%] p-[6em] bg-[#e4ece0] ">
        {benefit.map(({ tagLine, img, desc }, index) => (
          <div key={index} className="flex flex-row gap-4 my-8 items-center ">
            <div>
              <img
                src={img}
                alt={tagLine}
                className="max-w-full w-[100%] object-fill"
              />
            </div>
            <div className="gap-[3.5em]">
              <h2 className="text-2xl font-light ">{tagLine}</h2>
              <p className="w-[70%] ">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
          <hr className="h-[0.05em] bg-[#e4ece0] border-none" />

    </div>
  );
}

export default Benefits;

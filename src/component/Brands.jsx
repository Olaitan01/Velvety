import React from "react";
import vogue from "../asset/Company01 (1).png";
import forbes from "../asset/Company02.png";
import TC from "../asset/Company03.png";
import WH from "../asset/Company04.png";
import WWD from "../asset/Company05.png";
function Brands() {
  const brand = [
    { img: vogue },
    { img: forbes },
    { img: TC },
    { img: WH },
    { img: WWD },
  ];
  return (
    <div className="flex flex-col gap-y-8 w-[80%] justify-center m-auto py-[6em]">
      <h3 className="headerStyle">As seen in</h3>
      <div className="flex flex-row justify-between items-center w-[100%]">
        {brand.map(({ img }, index) => (
          <div key={index}>
            <img src={img} alt="brand" className="max-w-full object-fill" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;

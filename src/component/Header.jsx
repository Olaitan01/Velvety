import React from "react";
import logo from "../asset/Logo (9).png";

function Header() {
  return (
    <div className="flex justify-between flex-row  w-[100%] text-[#ffffff] px-[80px] pt-[20px]">
      <div>
        <img src={logo} alt="velvety logo" />
      </div>
      <div className="flex justify-between w-[40%]">
        <div>
          <ul className="flex gap-4 ">
            <li>PAGES</li>
            <li>SHOP</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <div className="">
          <ul className="flexDesign">
            <li>LOGIN</li>
            <li>CART(0)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

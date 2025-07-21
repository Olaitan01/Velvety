import React from "react";
import classwing from "../asset/Velvety2.png";
import holocane from "../asset/Velvety3.png";
import inamorata from "../asset/Velvety5.png";
import lightcool from "../asset/Velvety6.png";
import ProductCard from "./ProductCard";
import Btn from "./Btn";

function Catalogue() {
  const catalogues = [
    {
      feature: "All needs",
    },
    {
      feature: "Protect",
    },
    {
      feature: "Regenerates",
    },
    {
      feature: "Revitalize",
    },
    {
      feature: "Feeds",
    },
    {
      feature: "Regulates",
    },
    { feature: "Purifies" },
    {
      feature: "Makeup Removal",
    },
    { feature: "Exfoliates" },
    {
      feature: "Antioxidant",
    },
    {
      feature: "Soothes",
    },
    {
      feature: "Smoothes skin texture",
    },
    {
      feature: "Tones",
    },
    {
      feature: "Anti-waste",
    },
    {
      feature: "Hydrate",
    },
    {
      feature: "Stregthens",
    },
    {
      feature: "Regenerates after UV exposure Strengthens",
    },
  ];

  const items = [
    {
      img: classwing,
      name: "CLASSWING",
      price: "$20",
      rating: 5,
    },
    {
      img: lightcool,
      name: "LIGHTCOOL",
      price: "$20",
      rating: 5,
    },

    {
      img: holocane,
      name: "Holocane",
      price: "$23",
      rating: 5,
    },
    {
      img: inamorata,
      name: "INAMORATA",
      price: "$20",
      rating: 4.5,
    },
  ];

  return (
    <div className="py-[6em] flex-row flex items-start w-[80%] m-auto gap-4">
      <div className="flex flex-col gap-6 w-[70%]">
        <h3 className="headerStyle">All Products</h3>
        <span className="subHeading">Mild skincare & facial routine</span>
        <div className=" flex flex-row flex-wrap gap-4  ">
          {catalogues.map(({ feature }, index) => (
            <button
              key={index}
              className="border-[0.05em] border-[#899f87] hover:bg-[#e4ece0] hover:font-semibold cursor-pointer rounded-full text-center text-xl p-[0.5em] "
            >
              {feature}{" "}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-row flex-wrap gap-4 w-[100%] items-stretch">
          {items.map(({ img, name, price, rating }, index) => (
            <div key={index}>
              <ProductCard
                img={img}
                name={name}
                price={price}
                rating={rating}
              />
            </div>
          ))}{" "}
        </div>
        <div className="ml-[4em]">
          <Btn btnText={"Shop now"} />
        </div>{" "}
      </div>
    </div>
  );
}

export default Catalogue;

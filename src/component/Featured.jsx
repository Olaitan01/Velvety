import React from "react";
import item from "../asset/Item.png";
import item1 from "../asset/Item (1).png";
import item2 from "../asset/Item (2).png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Featured() {
  const items = [
    {
      img: item,
      name: "CHICORI",
      price: "$20",
      rating: 4,
    },
    {
      img: item1,
      name: "NOTORIOUS",
      price: "$23",
      rating: 5,
    },
    {
      img: item2,
      name: "HOLOCENA",
      price: "$20",
      rating: 5,
    },
  ];

  return (
    <div className=" flex flex-col gap-[4em] py-[6em]">
      <div className="flex flex-col gap-[1em]">
        <span className="text-xl font-normal text-[#a3b4a1] text-center">
          Our featured products
        </span>
        <h2 className="text-4xl w-[45%] m-auto font-semibold text-center">
          Facial and skincare, natural and certified organic
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center gap-6 border-t-[0.15em] border-b-[0.15em] border-[#e4ece0] px-[2em]">
        {items.map(({ img, name, price, rating }, index) => (
          <div
            key={index}
            className={`flex flex-col p-[2em] gap-[1.8em] ${
              name !== "HOLOCENA"
                ? "border-r-[0.15em] border-[#e4ece0]"
                : " border-none"
            }`}
          >
            <div
              className={`bg-[#e4ece0] flex justify-center items-center ${
                name === "NOTORIOUS" ? "rounded-full" : "rounded-none"
              }`}
            >
              <img src={img} alt={name} className="max-w-full object-fill" />
            </div>

            <div>
              <span className="text-left text-2xl font-semibold">{name}</span>
              <div className="flex flex-row justify-between items-center">
                <span className="text-xl font-bold">{price}</span>
                <div className="flex items-start gap-2">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={rating}
                      precision={0.5}
                      readOnly
                      style={{ color: "#3c5d39" }}
                    />
                  </Stack>
                  <span className="font-light text-xl">{rating}.0</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;

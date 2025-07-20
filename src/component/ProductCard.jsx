import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
function ProductCard({ img, price, rating, name }) {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-6 border-t-[0.15em] border-b-[0.15em] border-[#e4ece0] px-[2em]">
        <div
          className={`flex flex-col p-[2em] gap-[1.8em] ${
            name === "HOLOCENA"
              ? " border-none"
              : "border-r-[0.15em] border-[#e4ece0]"
          }`}
        >
          <div
            className={`bg-[#e4ece0] flex justify-center items-center 
          ${name === "NOTORIOUS" ? "rounded-full" : "rounded-none"} `}
          >
            <img src={img} alt={name} className="max-w-full object-fill" />
          </div>

          <div>
            <span className="text-left text-2xl font-semibold">{name}</span>
            <div className="flex flex-row flex-wrap justify-between items-center">
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
      </div>
    </div>
  );
}

export default ProductCard;

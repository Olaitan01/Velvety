import React from "react";
import velvet8 from "../asset/Velvety8.png";
import slider from "../asset/Slider.png";
import { Rating, Stack } from "@mui/material";

function Testimonial() {
  return (
    <div className="border-b-[0.05em] border-[#3c5d39]">
      <div className="flex flex-row justify-between items-center w-[80%] m-auto py-[6em] ">
        <div className="bg-[#e4ece0] rounded-full ">
          <img src={velvet8} alt="vevet8" className="max-w-full object-fill" />
        </div>{" "}
        <div className="flex flex-col gap-4  w-[50%]">
          <h3 className="headerStyle pb-[1em]">Product Testimonials</h3>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.5}
              readOnly
              style={{ color: "#3c5d39" }}
            />
          </Stack>
          <span className="text-3xl font-semibold w-[90%]">
            “I’ve been feeling pretty stressed with my skin lately, so I picked
            up a set of HOLOCENA skincare. Oh my goodness!. It was AMAZING. My
            skin felt so soft and moisturized”
          </span>
          <i className="text-xl ">Customer Review</i>
        </div>
        <img src={slider} alt="slider" />
      </div>
    </div>
  );
}

export default Testimonial;

import React, { useRef } from "react";
import DesktopHero from "../asset/Image (45).png";
import DesktopHeroBlank from "../asset/Bakground.png";
import HeroImage from "../asset/Hero Image.png";
import Header from "./header";
import slider from "../asset/Slider (1).png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

function Hero() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();

//   useGSAP(
//     () => {
//       gsap.from(".heroBg", {
//         x: -1000,
//         opacity: 0.5,
//         duration: 1.5,
//       });

//       gsap.from(".heroImg", {
//         x: 1000,
//         duration: 0.5,
//         opacity: 1.5,
        
//       });
//     },
//     { scope: container }
//   );

  return (
    <div className="relative text-[#f2f6ef] w-[100%] " ref={container}>
      <div className="absolute w-[100%] top-4 header">
        <Header />
      </div>
      <div className="flex  w-[100%] ">
        <div className="heroBg">
          <img
            src={DesktopHeroBlank}
            alt="desktop hero"
            className="max-w-full w-[50vw] h-[80vh] object-cover"
          />
        </div>
        <div className="heroImg">
          <img
            src={DesktopHero}
            alt="desktop hero"
            className="max-w-full w-[50vw] h-[80vh] object-cover"
          />
        </div>
      </div>
      <div>
        <div className="absolute top-1/2 left-[5em]">
          <div>
            <img src={slider} alt="slider" />
          </div>
        </div>
        <div className="flex -bottom-[19em] items-center absolute  left-[20em] w-[100%] ">
          <div className="flex justify-center items-center ">
            <div className="productimg">
              <img
                src={HeroImage}
                alt="hero image"
                className="max-w-full object-contain h-[130vh] "
              />
            </div>
            <div className="flex flex-col gap-[3em] ">
              <h1 className="heroTxt text-[7.5rem] w-[70%]  font-serif leading-[1em]">
                Let nature take care of your body and soul
              </h1>
              <button className="heroBtn text-[#000000] text-[1.5rem] flex justify-center items-center gap-2 bg-[#f2f6ef] w-[356px] p-[20px] ">
                {" "}
                Shop now
                <svg
                  width="31"
                  height="20"
                  viewBox="0 0 31 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.5001 9.9999L30.5527 9.26049L30.5532 9.25747L30.5529 9.25743L30.5479 9.2567L30.5234 9.25291C30.5007 9.24934 30.4654 9.24361 30.4185 9.23549C30.3247 9.21926 30.1846 9.19349 30.006 9.15628C29.6486 9.08182 29.1385 8.96189 28.5373 8.78153C27.3296 8.41921 25.7802 7.82074 24.3628 6.87586C23.0131 5.976 21.9592 4.47713 21.2302 3.14076C20.8708 2.48173 20.6008 1.88177 20.4211 1.44751C20.3314 1.23073 20.2646 1.05619 20.2207 0.93738C20.1988 0.878 20.1826 0.832619 20.1722 0.802928L20.1609 0.770397L20.1585 0.763372L20.1582 0.762451C20.1583 0.762579 20.1583 0.762724 19.4468 0.999895C18.7353 1.23707 18.7354 1.23725 18.7354 1.23744L18.7356 1.23792L18.736 1.23919L18.7373 1.24296L18.7415 1.25533L18.7566 1.29891C18.7696 1.33612 18.7886 1.38937 18.8136 1.45694C18.8634 1.59204 18.9373 1.78469 19.0351 2.02103C19.2304 2.49302 19.5229 3.14306 19.9134 3.85903C20.6845 5.27266 21.8806 7.02379 23.5308 8.12393C24.1953 8.56696 24.8807 8.93883 25.5478 9.2499H0.446815V10.7499H25.5478C24.8807 11.061 24.1953 11.4328 23.5308 11.8759C21.8806 12.976 20.6845 14.7271 19.9134 16.1408C19.5229 16.8567 19.2304 17.5068 19.0351 17.9788C18.9373 18.2151 18.8634 18.4078 18.8136 18.5428C18.7886 18.6104 18.7696 18.6637 18.7566 18.7009L18.7415 18.7445L18.7373 18.7568L18.736 18.7606L18.7356 18.7619L18.7354 18.7623C18.7354 18.7625 18.7353 18.7627 19.4468 18.9999C20.1583 19.2371 20.1583 19.2372 20.1582 19.2373L20.1585 19.2364L20.1609 19.2294L20.1722 19.1969C20.1826 19.1672 20.1988 19.1218 20.2207 19.0624C20.2646 18.9436 20.3314 18.7691 20.4211 18.5523C20.6008 18.118 20.8708 17.5181 21.2302 16.859C21.9592 15.5227 23.0131 14.0238 24.3628 13.1239C25.7802 12.1791 27.3296 11.5806 28.5373 11.2183C29.1385 11.0379 29.6486 10.918 30.006 10.8435C30.1846 10.8063 30.3247 10.7805 30.4185 10.7643C30.4654 10.7562 30.5007 10.7505 30.5234 10.7469L30.5479 10.7431L30.5529 10.7424L30.5532 10.7423L30.5527 10.7393L30.5001 9.9999Z"
                    fill="#213721"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

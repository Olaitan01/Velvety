import React from "react";
import Box from "@mui/material/Box";
import { inputBaseClasses } from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function Subscribe() {
  return (
    <div className="bg-[#899f87] p-[6em] flex flex-row items-center justify-between">
      <div className="text-[#f2f3e2]">
        <span className="text-6xl ">
          Subscribe to get 10% off <br />
          your first order
        </span>
      </div>
      <div className="relative">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "55ch" },
            bgcolor: "#ffffff",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-suffix-shrink"
            label="Drop your email here"
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      opacity: 0,
                      pointerEvents: "none",
                      [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                        opacity: 1,
                      },
                    }}
                  >
                    lbs
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>{" "}
        <svg
          width="48"
          height="31"
          viewBox="0 0 48 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/3 right-3"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.947 15.5002L47.9995 14.7606L48 14.7578L47.9997 14.7577L47.9983 14.7575L47.9888 14.7561L47.9465 14.7496C47.9082 14.7436 47.8498 14.7341 47.7728 14.7208C47.6189 14.6941 47.3909 14.6522 47.1013 14.5918C46.5218 14.4711 45.6972 14.2771 44.7259 13.9857C42.7779 13.4014 40.2662 12.4328 37.9607 10.8958C35.7226 9.40374 34.0026 6.94261 32.8295 4.79202C32.248 3.72588 31.8115 2.75583 31.5207 2.05324C31.3755 1.7023 31.2671 1.41905 31.1954 1.22506C31.1596 1.12809 31.1331 1.05351 31.1157 1.00401L31.0966 0.948945L31.0923 0.936176L31.0914 0.933595L31.0914 0.93335C31.0914 0.933457 31.0914 0.933592 30.3799 1.17076C29.6684 1.40793 29.6685 1.40812 29.6685 1.40834L29.6687 1.40891L29.6693 1.41054L29.671 1.41576L29.6772 1.43388C29.6825 1.44934 29.6901 1.47149 29.7001 1.5C29.7201 1.55701 29.7495 1.63946 29.7883 1.74462C29.8659 1.9549 29.9814 2.25626 30.1347 2.62677C30.441 3.36708 30.9001 4.38722 31.5127 5.5103C32.7279 7.73815 34.5902 10.4515 37.1286 12.1438C38.8521 13.2928 40.669 14.1374 42.3002 14.7502H0.128891V16.2502H42.3002C40.669 16.8629 38.8521 17.7076 37.1286 18.8566C34.5902 20.5489 32.7279 23.2622 31.5127 25.4901C30.9001 26.6132 30.441 27.6333 30.1347 28.3736C29.9814 28.7441 29.8659 29.0455 29.7883 29.2558C29.7495 29.3609 29.7201 29.4434 29.7001 29.5004C29.6954 29.5139 29.6911 29.526 29.6875 29.5367C29.6834 29.5484 29.68 29.5584 29.6772 29.5665L29.671 29.5846L29.6693 29.5898L29.6687 29.5915L29.6685 29.5921C29.6685 29.5923 29.6684 29.5925 30.3799 29.8296C31.0914 30.0668 31.0914 30.0669 31.0914 30.067L31.0914 30.0668L31.0923 30.0642L31.0966 30.0514L31.1157 29.9964C31.1331 29.9469 31.1596 29.8723 31.1954 29.7753C31.2671 29.5813 31.3755 29.2981 31.5207 28.9472C31.8115 28.2446 32.248 27.2745 32.8295 26.2084C34.0026 24.0578 35.7226 21.5967 37.9607 20.1046C40.2662 18.5676 42.7779 17.599 44.7259 17.0146C45.6972 16.7233 46.5218 16.5293 47.1013 16.4086C47.3909 16.3482 47.6189 16.3063 47.7728 16.2796C47.8498 16.2663 47.9082 16.2568 47.9465 16.2508L47.9888 16.2443L47.9983 16.2429L47.9997 16.2427L48 16.2426L47.9995 16.2398L47.947 15.5002Z"
            fill="#213721"
          />
        </svg>
      </div>
    </div>
  );
}

export default Subscribe;

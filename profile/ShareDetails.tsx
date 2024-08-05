import { LinearProgress } from "@mui/material";
import React from "react";

const ShareDetails = () => {
  return (
    <div className="flex flex-col items-center pt-10 px-28 gap-4">
      <div className="flex justify-between w-full ">
        <div className="flex flex-col">
          <div className="">
            <span className="text-sm">Traded Shares: </span>
            <span className="font-bold">1,25,555</span>
          </div>
          <div className="">
            <span className="text-sm">Transcation: </span>
            <span className="font-bold">1,125</span>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-sm">Total Turnover</span>
          <span className="font-bold">22,22,079.00</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[100%] px-10">
        <LinearProgress
          variant="determinate"
          value={70}
          sx={{
            borderRadius: "20px",
            height: "14px",
            backgroundColor: "#F3F3F3",
            "& .MuiLinearProgress-bar": {
              borderRadius: "20px",
              backgroundColor: "#FFCC32",
            },
          }}
        />
        <LinearProgress
          variant="determinate"
          value={50}
          sx={{
            borderRadius: "20px",
            height: "14px",
            backgroundColor: "#F3F3F3",
            "& .MuiLinearProgress-bar": {
              borderRadius: "20px",
              backgroundColor: "#0075BC",
            },
          }}
        />
        <LinearProgress
          variant="determinate"
          value={30}
          sx={{
            borderRadius: "20px",
            height: "14px",
            backgroundColor: "#F3F3F3",
            "& .MuiLinearProgress-bar": {
              borderRadius: "20px",
              backgroundColor: "#F15632",
            },
          }}
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-lg p-1 w-5 h-3 bg-[#FFCC32]"></div>
        <span className="font-semibold text-sm text-[#FFCC32]">Buy Count</span>
        <div className="rounded-lg p-1 w-5 h-3 bg-[#0075BC]"></div>
        <span className="font-semibold text-sm text-[#0075BC]">
          Script Traded
        </span>
        <div className="rounded-lg p-1 w-5 h-3 bg-[#F15632]"></div>
        <span className="font-semibold text-sm text-[#F15632]">Sell Count</span>
      </div>
    </div>
  );
};

export default ShareDetails;

import { KeyboardArrowRight } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const MyPortfolio = () => {
  const data = [
    {
      script: "NABIL",
      quantity: 10,
      ltp: 100.0,
      value: 1000.0,
      profit: 100,
      loss: 0,
    },
    {
      script: "NABIL",
      quantity: 10,
      ltp: 100.0,
      value: 1000.0,
      profit: 0,
      loss: 0,
    },
    {
      script: "NABIL",
      quantity: 10,
      ltp: 100.0,
      value: 1000.0,
      profit: 0,
      loss: 100,
    },
    {
      script: "NABIL",
      quantity: 10,
      ltp: 100.0,
      value: 1000.0,
      profit: 100,
      loss: 0,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg shadow-profile-card border border-[rgba(32,183,138,0.2)]">
      <h1 className="font-bold px-4 py-2 text-xl">My Portfolio</h1>
      <hr />
      <div className="flex flex-col gap-2 p-3">
        {data?.map((item, index) => (
          <div className="">
            <div
              key={index}
              className="flex justify-between text-sm font-semibold w-full p-2"
            >
              <span className="font-semibold w-[33.33%]">{item?.script}</span>
              <div className="flex flex-col items-center w-[33.33%]">
                <span>{item?.quantity} Shares</span>
                <span>LTP: {item?.ltp}</span>
              </div>
              <div className="flex items-end flex-col gap-2 w-[33.33%] ">
                <span>Rs. {item?.value}</span>
                {item?.profit > 0 && (
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/images/profile/profit.svg"}
                      height={20}
                      width={20}
                      alt="profit"
                    />
                    <span className="font-normal text-xs text-naasa-green">
                      Rs. {item?.profit}
                    </span>
                  </div>
                )}
                {item?.loss > 0 && (
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/images/profile/loss.svg"}
                      height={20}
                      width={20}
                      alt="loss"
                    />
                    <span className="font-normal text-[#F15632]">
                      Rs. {item?.loss}
                    </span>
                  </div>
                )}
                {item?.profit === 0 && item?.loss === 0 && (
                  <span className="text-xs text-gray-500">Rs. 00.00</span>
                )}
              </div>
              <hr />
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="flex justify-end text-xs items-center p-2 cursor-pointer">
        <span className="text-naasa-green font-bold">View More</span>
        <KeyboardArrowRight sx={{ fontSize: "16px", color: "#20B78A" }} />
      </div>
    </div>
  );
};

export default MyPortfolio;

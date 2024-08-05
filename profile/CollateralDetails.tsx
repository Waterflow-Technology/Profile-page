import Image from "next/image";
import React from "react";

const CollateralDetails = () => {
  return (
    <div
      className="relative w-full h-[280px] bg-collateral-card-gradient rounded-lg"
      // style={{ backgroundImage: "url(images/profile/welcome-card.svg)" }}
    >
      {/* side images */}
      <div className="absolute">
        <Image
          src={"/images/profile/naasa-partial1.png"}
          height={30}
          width={30}
          alt="naasa-partial1"
        />
      </div>
      <div className="absolute bottom-0 right-0 overflow-hidden">
        <Image
          src={"/images/profile/naasa-partial2.png"}
          height={30}
          width={30}
          alt="naasa-partial1"
        />
      </div>

      <div className="flex flex-col px-12 py-2 gap-4">
        <div className="flex flex-col">
          <span className="font-bold text-[#58595B] text-lg">
            Total Collateral
          </span>
          <div className="flex items-center gap-1">
            <span className="text-[#0075BC] font-bold">Rs.</span>
            <span className="text-xl text-[#0075BC] font-bold">
              900,000,000.00
            </span>
          </div>
        </div>

        <div className="flex gap-8 text-sm">
          <div className="flex flex-col ">
            <span className="text-[#58595B] ">Available Money</span>
            <span className="font-bold text-[#0075BC] ">Rs. 6,200,52.08</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#58595B] ">Unbilled Sales</span>
            <span className=" font-bold text-[#0075BC]">Rs. 6,200,52.08</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#58595B] ">Non-Cash Collateral</span>
            <span className=" font-bold text-[#0075BC]">Rs. 6,200,52.08</span>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex flex-col bg-[rgba(255,255,255,0.3)] rounded-lg text-xs p-4 gap-1">
            <div className="flex items-center gap-3">
              <div className="rounded-lg p-1 w-5 h-3 bg-[#58595B]"></div>
              <span className="font-semibold text-[#58595B]">
                Total Collateral
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg p-1 w-5 h-3 bg-[#0075BC]"></div>
              <span className="font-semibold text-[#0075BC]">
                Available Money
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg p-1 w-5 h-3 bg-[#F15632]"></div>
              <span className="font-semibold text-[#F15632]">
                Unbilled Sales
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg p-1 w-5 h-3 bg-[#20B78A]"></div>
              <span className="font-semibold text-[#20B78A]">
                Non-Cash Collateral
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollateralDetails;

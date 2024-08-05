import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";

const tickets = [
  {
    ticketId: "#T123456",
    date: "12-08-23",
    time: "12:00 PM",
    issue: "Collateral",
    Description:
      "Collateral loaded successfully and collateral posted in the users end.",
    status: "In Progress",
  },
  {
    ticketId: "#T123456",
    date: "12-08-23",
    time: "12:00 PM",
    issue: "Collateral",
    Description:
      "Collateral loaded successfully and collateral posted in the users end.",
    status: "Closed",
  },
  {
    ticketId: "#T123456",
    date: "12-08-23",
    time: "12:00 PM",
    issue: "Collateral",
    Description:
      "Collateral loaded successfully and collateral posted in the users end.",
    status: "Open",
  },
  {
    ticketId: "#T123456",
    date: "12-08-23",
    time: "12:00 PM",
    issue: "Collateral",
    Description:
      "Collateral loaded successfully and collateral posted in the users end.",
    status: "Open",
  },
];

const TicketList = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg shadow-profile-card border border-[rgba(32,183,138,0.2)]">
      <h1 className="font-bold px-4 py-2 text-xl">Tickets</h1>
      <hr />
      <div className="flex flex-col gap-2 p-3">
        {tickets?.map((item, index) => (
          <div className="flex flex-col gap-2 text-sm" key={index}>
            <div className="flex justify-between ">
              <div className="flex items-center gap-2">
                <span className="text-xs">{item?.date}</span>
                <span className="border-x-[1.5px] px-2 text-xs">
                  {item?.time}
                </span>
                <div>
                  <span className="text-xs text-[#626464]">TicketID: </span>
                  <span className="font-semibold">{item?.ticketId}</span>
                </div>
              </div>
              <div className="">
                <span className="text-xs text-[#626464]">Status: </span>
                <span
                  className={`${
                    item?.status.toUpperCase() === "IN PROGRESS"
                      ? "text-[#FECB2F]"
                      : item?.status.toUpperCase() === "CLOSED"
                      ? "text-naasa-green"
                      : "text-[#0075BC]"
                  }`}
                >
                  {item?.status}
                </span>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-[24%]">
                <span className="text-xs text-[#626464]">Issue: </span>
                <span className="font-semibold">{item?.issue}</span>
              </div>
              <div className="w-[75%] truncate">
                <span className="text-xs text-[#626464]">Description: </span>
                <span className="font-semibold">{item?.Description}</span>
              </div>
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

export default TicketList;

import Image from "next/image";
import React from "react";
import CollateralDetails from "./CollateralDetails";
import ShareDetails from "./ShareDetails";
import TicketList from "./TicketList";
import MyPortfolio from "./MyPortfolio";

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CollateralDetails />
        <ShareDetails />
        <TicketList />
        <MyPortfolio />
      </div>
    </div>
  );
};

export default ProfilePage;

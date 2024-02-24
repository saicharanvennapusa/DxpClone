import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../Components/SideNavBar/SideNavBar";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";

const StartingPageLayout = () => {
   console.log("StartingPageLayout");
   return (
      <>
         <HomeNavBar />
         <Outlet />
      </>
   );
};

export default StartingPageLayout;

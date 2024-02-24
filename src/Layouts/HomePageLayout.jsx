import React from "react";
import { Outlet } from "react-router-dom";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import SideNavBar from "../Components/SideNavBar/SideNavBar";

const HomePageLayout = () => {
   return (
      <>
         <SideNavBar />
         <Outlet />
      </>
   );
};

export default HomePageLayout;

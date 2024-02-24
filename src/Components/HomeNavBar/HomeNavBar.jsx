import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Setings from "../../assets/Setings";
import Folder from "../../assets/Folder";
const HomeNavBar = () => {
   const adjust = {
      width: "5rem",
   };

   console.log("HomeNavBar");
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid h-3">
               <a className="navbar-brand text-dark" href="#">
                  Navbar
               </a>
               <div className="d-flex justify-content-between m-2 p-2" style={adjust}>
                  <Folder />
                  <Setings />
               </div>
            </div>
         </nav>
      </>
   );
};

export default HomeNavBar;

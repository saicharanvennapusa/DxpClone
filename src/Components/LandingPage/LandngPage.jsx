import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";
import { Link, NavLink } from "react-router-dom";

const LandngPage = () => {
   const mystyle = {
      width: "22rem",
      height: "8rem",
   };

   const [followers, setFollowers] = useState(null);
   const [following, setFollowing] = useState(null);
   const [border, setBorder] = useState(null);
   const test = async () => {
      const response = await fetch("https://api.github.com/users/saicharanvennapusa");
      const data = await response.json();
      console.log(data, data.followers, data.following);
   };
   useEffect(() => {
      async function fetchData() {
         try {
            const response = await fetch("https://api.github.com/users/saicharanvennapusa");
            const data = await response.json();
            console.log(data, data.following);
            setFollowing(data.following);
            console.log(data.following);
            setFollowers(data.followers);
         } catch (e) {
            console.error(e);
         }
      }
      fetchData();
   }, []);

   function hightlightBackground(e) {
      console.log(border);
      setBorder(() => (e.target.style.border = "1px solid blue"));
      console.log(e.target.style.border);
   }

   return (
      <>
         <div>
            <div className="container-fluid w-5 h-100 ">
               <Link to="listpage">
                  <h1 className="pb-3"> CLONE</h1>
               </Link>
               <div className="adjustt">
                  <div className="card shadow-lg ">
                     <h4 className="px-3 pt-3 text-info ch"> Test </h4>
                     <div className="card-body ch" style={{ flexDirection: "row", justifyContent: "center" }}>
                        <div className="ch">
                           <FontAwesomeIcon icon={faBell} />
                           <p className="ch" style={{ display: "inline" }}>
                              {" "}
                              {followers} Followers
                           </p>
                        </div>
                        <div className="ch">
                           <FontAwesomeIcon icon={faBell} />
                           <p className="ch" style={{ display: "inline" }}>
                              {" "}
                              {following} Following
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default LandngPage;

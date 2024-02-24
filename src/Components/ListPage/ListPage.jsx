import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ChildList from "./ChildList";
import "./childList.css";
import { Link, NavLink } from "react-router-dom";

const ListPage = () => {
   const totallist = [
      {
         environment: "dev",
         status: "active",
         Service: "3",
         member: "3",
         location: "mumbai",
      },
      {
         environment: "sit",
         status: "Pending",
         Service: "4",
         member: "4",
         location: "Hyderabad",
      },
      {
         environment: "uat",
         status: "Failure",
         Service: "4",
         member: "4",
         location: "Banglore",
      },
      {
         environment: "1",
         status: "Failure",
         Service: "4",
         member: "4",
         location: "Banglore",
      },
      {
         environment: "uat2",
         status: "Failure",
         Service: "4",
         member: "4",
         location: "Banglore",
      },
      {
         environment: "uat3",
         status: "Failure",
         Service: "4",
         member: "4",
         location: "Banglore",
      },
   ];

   console.log("ListPage");
   // <div className="container mt-5 w-75 h-full bg-warning" style={{ height: "40rem" }}></div>
   const list = totallist.map((individual) => <ChildList key={individual.environment} individual={individual} />);
   return (
      <>
         <div className="container p-3">
            <NavLink to="/homelayoutpage">
               <h2 className="py-5"> Table </h2>
            </NavLink>
            <div className="row mb-4">
               <div className="col py-2 text-center">Environment({totallist.length})</div>
               <div className="col py-2 mx-3 ">
                  <span className="bg-danger">Status</span>
               </div>
               <div className="col py-2">
                  <span className="bg-danger">Service</span>
               </div>
               <div className="col py-2">Member</div>
               <div className="col py-2">Location</div>
            </div>
            <div className="p-2">{list}</div>
         </div>
      </>
   );
};

export default ListPage;

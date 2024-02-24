import React from "react";
import "./childList.css";

const ChildList = ({ individual }) => {
   return (
      <div>
         <div className="rows d-flex justify-content-center shadow extra-height p-3">
            <div className="col p-5">
               <span className="bg-info p-2">{individual.environment}</span>
            </div>
            <div className="col p-5">
               <span className="bg-info p-2">{individual.status}</span>
            </div>
            <div className="col p-5">
               <span className="bg-info p-2">{individual.Service}</span>
            </div>
            <div className="col p-5">
               <span className="bg-info p-2">{individual.member}</span>
            </div>
            <div className="col p-5">
               <span className="bg-info p-2">{individual.location}</span>
            </div>
         </div>
      </div>
   );
};

export default ChildList;

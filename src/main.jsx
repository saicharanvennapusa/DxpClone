import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import StartingPageLayout from "./Layouts/StartingPageLayout.jsx";
import ListPage from "./Components/ListPage/ListPage.jsx";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomePageLayout from "./Layouts/HomePageLayout.jsx";
import LandngPage from "./Components/LandingPage/LandngPage.jsx";
import Overview from "./Components/SideNavBarPages/Overview.jsx";
import Services from "./Components/SideNavBarPages/Services.jsx";
import Activities from "./Components/SideNavBarPages/Activities.jsx";
import Backups from "./Components/SideNavBarPages/Backups.jsx";
import Logs from "./Components/SideNavBarPages/Logs.jsx";
import Monitoring from "./Components/SideNavBarPages/Monitoring.jsx";
import Network from "./Components/SideNavBarPages/Network.jsx";
import Settings from "./Components/SideNavBarPages/Settings.jsx";
import Team from "./Components/SideNavBarPages/Team.jsx";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<StartingPageLayout />}>
         <Route path="/" element={<LandngPage />} />
         <Route path="/listpage" element={<ListPage />} />
         <Route path="/homelayoutpage" element={<HomePageLayout />}>
            <Route path="/homelayoutpage" element={<Overview />} />
            <Route path="/homelayoutpage/services" element={<Services />} />
            <Route path="/homelayoutpage/activities" element={<Activities />} />
            <Route path="/homelayoutpage/backups" element={<Backups />} />
            <Route path="/homelayoutpage/logs" element={<Logs />} />
            <Route path="/homelayoutpage/monitoring" element={<Monitoring />} />
            <Route path="/homelayoutpage/network" element={<Network />} />
            <Route path="/homelayoutpage/settings" element={<Settings />} />
            <Route path="/homelayoutpage/team" element={<Team />} />
         </Route>
      </Route>
   )
);

// const router = createBrowserRouter([
//    {
//       path: "/",
//       element: <StartingPageLayout />,
//       children: [
//          {
//             path: "",
//             element: <LandngPage />,
//          },
//       ],
//    },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminHome from "./adminPages/home/AdminHome";
import AdminLogin from "./adminPages/login/AdminLogin";
import Services from "./adminPages/services/Services";
import Batches from "./components/Batches/Batches";
import Billing from "./adminPages/billing/Billing";

function AdminRoutes() {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      {/* <Route path={"/admin"} element={<AdminLogin />} /> */}
      <Route path={"/admin"} element={<AdminHome />} />
      <Route path={"/admin/batches"} element={<Batches />} />
      <Route path={"/admin/billing"} element={<Billing />} />
      <Route path={"/admin/services"} element={<Services />} />
    </Routes>
  );
}

export default AdminRoutes;

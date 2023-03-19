import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./neighborPages/home/Home";
import AdminHome from "./adminPages/home/AdminHome";
import NeighborBills from "./neighborPages/facturas/NeighborBills";
import Batches from "./components/Batches/Batches";
import Billing from "./components/Billing/Billing";
import Services from "./adminPages/services/Services";
import AdminLogin from "./adminPages/login/AdminLogin";
import Login from "./neighborPages/login/Login";

import { setAuthToken } from "./components/BrowserHistory/setAuthToken";
import {
  getAdminProfile,
  getBatch,
  getInvoice,
  getService,
  getUserProfile,
} from "./redux/actions";
import AdminRoutes from "./AdminRoutes";
import Landing from "./commonPages/Landing";

function App() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const tokenA = localStorage.getItem("tokenA");
  const idA = localStorage.getItem("idA");

  if (token) {
    setAuthToken(token);
  }

  // useEffect(() => {
  //   dispatch(getUserProfile(id));
  //   dispatch(getAdminProfile(idA));
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path={"/login"} element={<Login />} />

        <Route path={"/"} element={<Landing />} />

        <Route path={"/bills"} element={<NeighborBills />} />

        <Route path={"/admin/login"} element={<AdminLogin />} />
        <Route path={"/admin"} element={<AdminHome />} />
        <Route path={"/admin/batches"} element={<Batches />} />
        <Route path={"/admin/billing"} element={<Billing />} />
        <Route path={"/admin/services"} element={<Services />} />

      </Routes>
      {/* {loggedAdmin === null ? false : <AdminRoutes />} */}
    </BrowserRouter>
  );
}

export default App;

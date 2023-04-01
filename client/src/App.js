import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./neighborPages/home/Home";
import AdminHome from "./adminPages/home/AdminHome";

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
import NeighborBills from "./neighborPages/facturas/NeighborBills";
import NeighborServices from "./neighborPages/servicios/NeighborServices";
import AdminNav from "./adminPages/adminComponents/AdminNav";
import PrivateRoutes from "./neighborPages/PrivateRoutes";
import PrivateAdmin from "./adminPages/PrivateAdmin";
import Batches from "./components/Batches/Batches";
import Billing from "./adminPages/billing/Billing";
import Services from "./adminPages/services/Services";

function App() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const tokenA = localStorage.getItem("tokenA");
  const idA = localStorage.getItem("idA");

  if (token) {
    setAuthToken(token);
  }

  useEffect(() => {
    dispatch(getUserProfile(id));
    //dispatch(getAdminProfile(idA));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/adminlogin"} element={<AdminLogin />} />

        <Route element={<PrivateRoutes />}>
          <Route path={"/:id"} element={<Home />} />
          <Route path={"/:id/bills"} element={<NeighborBills />} />
          <Route path={"/:id/services"} element={<NeighborServices />} />
        </Route>

        <Route element={<PrivateAdmin />}>
          <Route exact path={"/admin"} element={<AdminHome />} />
          <Route path={"/admin/batches"} element={<Batches />} />
          <Route path={"/admin/billing"} element={<Billing />} />
          <Route path={"/admin/services"} element={<Services />} />
        </Route>
      </Routes>

      {/* {loggedAdmin === null ? false : <AdminRoutes />} */}
    </BrowserRouter>
  );
}

export default App;

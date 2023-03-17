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
import Services from "./components/Services/Services";
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


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getBatch());
    dispatch(getService());
     dispatch(getInvoice());
  }, [dispatch]);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");


  
  if (token) {
    setAuthToken(token);
  }

  // useEffect(() => {
  //   dispatch(getUserProfile(id));

  // }, [dispatch]);
const loggedAdmin = useSelector(state=> state.loggedAdmin)
  return (
    <BrowserRouter>
      <Routes>
        {

        }
        <Route path={"/admin"} element={<AdminLogin />} />   
          
        <Route path={"/admin/:id"} element={<AdminHome />} />
        <Route path={"/admin/batches"} element={<Batches />} />
        <Route path={"/admin/billing"} element={<Billing />} />
        <Route path={"/admin/services"} element={<Services />} />

        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/bills"} element={<NeighborBills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

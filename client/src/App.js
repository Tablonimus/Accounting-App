import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../src/components/Home/Home";
import AdminHome from "./components/AdminView/AdminHome";


import Batches from "./components/Batches/Batches";
import Billing from "./components/Billing/Billing";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRewardCriminals());
  //   dispatch(getLevel1());
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/admin"} element={<AdminHome />} />
        <Route path={"/batches"} element={<Batches />} />
        <Route path={"/billing"} element={<Billing />} />
        <Route path={"/services"} element={<Services/>} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;

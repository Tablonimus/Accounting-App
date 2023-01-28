import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "../src/components/Home/Home";
import AdminHome from "./components/AdminView/AdminHome";
import EmitirFactura from "./components/AdminView/EmitirFactura";
import GastosKw from "./components/GastosKw/GastosKw";
import GenerarRecibo from "./components/GenerarRecibo/GenerarRecibo";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRewardCriminals());
  //   dispatch(getLevel1());
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/adminhome"} element={<AdminHome />} />
        <Route path={"/emitirfc"} element={<EmitirFactura />} />
        <Route path={"/gastoskw"} element={<GastosKw />} />
        <Route path={"/generar-recibo"} element={<GenerarRecibo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

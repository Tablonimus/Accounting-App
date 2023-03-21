import React, { useEffect } from "react";
import NavBarHome from "../../components/Bars/NavBarHome";
import { Card, Carousel } from "flowbite-react";
import bg from "../../assets/images/bg1.avif";
import ToolsBar from "../../components/Bars/ToolsBar";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getUserProfile } from "../../redux/actions";
import PrivateRoutes from "../PrivateRoutes";
import NeighborBills from "../facturas/NeighborBills";
import NeighborServices from "../servicios/NeighborServices";
export default function Home() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  // useEffect(() => {
  //   dispatch(getUserProfile(id));
  // }, []);

  return (
    <div className=" flex flex-col justify-between bg-gray-900">
      <NavBarHome />

    

      <div className="my-2 flex justify-center items-center">
        <h1 className="text-white ">Últimos avisos</h1>
      </div>

      <ToolsBar id={id} />
    </div>
  );
}

import React from "react";
import NavBarHome from "../../components/Bars/NavBarHome";
import ToolsBar from "../../components/Bars/ToolsBar";
import { useSelector } from "react-redux";

export default function Home() {

  return (
    <div className=" flex flex-col justify-between h-screen bg-gray-900">
      <NavBarHome />

      <div className="my-2 flex justify-center items-center">
        <h1 className="text-white ">Últimos avisos</h1>
      </div>

      <ToolsBar/>
    </div>
  );
}

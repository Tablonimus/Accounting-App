import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cordillera from "../assets/images/cordillera1.jpg";
import NavBarHome from "../components/Bars/NavBarHome";
import "./landing.css"
export default function Landing() {
  const loggedUser = useSelector((state) => state.loggedUser);

  const id = localStorage.getItem("id");

  return (
    <div className=" flex flex-col justify-between bg-blue-300">

      <NavBarHome />
      {/* <div className="main">
      </div> */}

  <button className="fixed top-24">adassdas</button>
      <div className=""></div>
    </div>
  );
}

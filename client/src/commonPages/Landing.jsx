import React, { useEffect } from "react";
import logo from "../assets/images/logo.png";
import prev from "../assets/images/preview.png";
import windows from "../assets/images/windows.png";
import android from "../assets/images/android.png";
import iphone from "../assets/images/iphone.png";
import linux from "../assets/images/linux.png";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import cordillera from "../assets/images/cordillera1.jpg";
import NavBarHome from "../components/Bars/NavBarHome";
import "./landing.css";
export default function Landing() {
  const loggedUser = useSelector((state) => state.loggedUser);

  const id = localStorage.getItem("id");

  return (
    <div className="main  flex flex-col items-center gap-3 justify-between lg:h-screen">
      <header className="flex w-11/12 py-3 justify-between items-center gap-3  border-b-2 drop-shadow-2xl">
        <img src={logo} className="h-20" alt="" />

        <Link to="/login">
          <button className="border-2 rounded-lg p-2 bg-gray-300 hover:bg-gray-200 hover:text-cyan-600 h-10 w-32 text-md font-bold shoadow-lg">
            {" "}
            <h3>Iniciar sesión</h3>
          </button>
        </Link>
      </header>
      <main className="flex flex-col lg:flex-row items-center ">
        <div className=" flex flex-col items-center gap-2 ">
          <div className="flex flex-col gap-4 items-center rounded-lg w-11/12 lg:w-96 p-4 ">
            <h1 className="text-5xl font-extrabold">
              Tus cuentas en un solo lugar.
            </h1>
            <section>
              <p className="font-bold text-xl">
                Gestioná tus comprobantes sin esfuerzo y mantené tus finanzas en
                orden con nuestra app.
              </p>
            </section>

            <button className="border-2 rounded-full w-10/12 py-2 bg-gray-300 hover:bg-gray-200 hover:text-cyan-600  text-md font-bold drop-shoadow-2xl">
              Descargar la App
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start rounded-lg p-3 opacity-90 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
          <img src={prev} alt="" className="h-64" />
          <div className="flex flex-col gap-3 justify-start items-start">
            <h3 className="text-xl font-semibold text-slate-600">
              Compatible con:
            </h3>
            <div className="flex flex-row justify-center gap-2 items-center object-cover">
              <img
                src={android}
                alt=""
                className="h-8  object-cover drop-shadow-lg"
              />
              <img
                src={windows}
                alt=""
                className="h-8  object-cover drop-shadow-lg"
              />
              <img
                src={iphone}
                alt=""
                className="h-8  object-cover drop-shadow-lg"
              />
              <img
                src={linux}
                alt=""
                className="h-8  object-cover drop-shadow-lg"
              />
            </div>
            <p className=" lg:w-56  md:w-56 text-sm text-slate-600 pr-10">
              Descargala hoy mismo y disfrutá de la tranquilidad de tener todo
              bajo control."
            </p>
          </div>
        </div>
      </main>
      <footer className="flex flex-row w-screen justify-center items-center bg-gray-200 rounded-t-lg p-2 gap-2 ">
        <img src={logo} alt="" className="h-20 drop-shadow-lg" />
        <p className="text-sm italic ">
          El uso de esta aplicación está destinado exclusivamente para los
          vecinos del barrio "Lugar Escondido".
        </p>
      </footer>
    </div>
  );
}

import React from "react";
import { Link, useParams } from "react-router-dom";
import recibo from "../../assets/images/recibos2.png";
import servicio from "../../assets/images/waiter.png";
import factura from "../../assets/images/recibos.png";
import home from "../../assets/images/home.png";

export default function ToolsBar() {
 
  const { id } = useParams();

  return (
    <div className="flex flex-row shadow-lg justify-around lg:justify-center lg:gap-16 h-16 w-full sticky bottom-0 bg-gray-200 ">
      <Link to={`/${id}`}>
        <button className="flex flex-col items-center justify-center m-1   ">
          <img src={home} className="w-10 rounded-full p-1" />
          <h5 className="text-sm text-black">Inicio</h5>
        </button>
      </Link>
      <Link to={`/${id}/services`}>
        <button className="flex flex-col items-center justify-center m-1 ">
          <img src={servicio} className="w-10 rounded-full p-1" />
          <h5 className="text-sm text-black">Servicios</h5>
        </button>
      </Link>
      <Link to={`/${id}/bills`}>
        <button className="flex flex-col items-center justify-center m-1   ">
          <img src={factura} className="w-10 rounded-full p-1" />
          <h5 className="text-sm text-black">Resumen</h5>
        </button>
      </Link>

      <Link to="/recibos">
        <button className="flex flex-col items-center justify-center m-1   ">
          <img src={recibo} className="w-10 rounded-full p-1" />
          <h5 className="text-sm text-black">Recibos</h5>
        </button>
      </Link>
      {/* <Link to="/">
        {url === "/" ? (
          <button className="flex flex-col items-center justify-center m-1  ">
            <img src={home} className="w-10 rounded-full bg-gray-300 p-1" />
            <h5 className=" font-bold text-sm text-black">Inicio</h5>
          </button>
        ) : (
          <button className="flex flex-col items-center justify-center m-1   ">
            <img src={home} className="w-10 rounded-full p-1" />
            <h5 className="text-sm text-black">Inicio</h5>
          </button>
        )}
      </Link>
      <Link to="/services">
        {url === "/services" ? (
          <button className="flex flex-col items-center justify-center m-1  ">
            <img src={servicio} className="w-10 rounded-full bg-gray-300 p-1" />
            <h5 className=" font-bold text-sm text-black">Servicios</h5>
          </button>
        ) : (
          <button className="flex flex-col items-center justify-center m-1 ">
            <img src={servicio} className="w-10 rounded-full p-1" />
            <h5 className="text-sm text-black">Servicios</h5>
          </button>
        )}
      </Link>
      <Link to={`/${id}/bills`}>
        {url === "/bills" ? (
          <button className="flex flex-col items-center justify-center m-1  ">
            <img src={factura} className="w-10 rounded-full bg-gray-300 p-1" />
            <h5 className=" font-bold text-sm text-black">Facturas</h5>
          </button>
        ) : (
          <button className="flex flex-col items-center justify-center m-1   ">
            <img src={factura} className="w-10 rounded-full p-1" />
            <h5 className="text-sm text-black">Facturas</h5>
          </button>
        )}
      </Link>

      <Link to="/generar-recibo">
        {url === "/generar-recibo " ? (
          <button className="flex flex-col items-center justify-center m-1  ">
            <img src={recibo} className="w-10 rounded-full bg-gray-300 p-1" />
            <h5 className=" font-bold text-sm text-black">Recibos</h5>
          </button>
        ) : (
          <button className="flex flex-col items-center justify-center m-1   ">
            <img src={recibo} className="w-10 rounded-full p-1" />
            <h5 className="text-sm text-black">Recibos</h5>
          </button>
        )}
      </Link> */}
    </div>
  );
}

import { Avatar } from "flowbite-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import recibo from "../../assets/images/recibos2.png";
import servicio from "../../assets/images/waiter.png";
import factura from "../../assets/images/recibos.png";
import home from "../../assets/images/homeslogo.png";

export default function AdminBar() {
  const url = window.location.pathname;

  return (
    <div className="flex flex-row shadow-lg justify-around lg:justify-center lg:gap-16 h-16 w-screen sticky bottom-0 bg-gray-100 ">
      <Link to="/admin/services">
        {url === "/admin/services" ? (
          <button className="flex flex-col items-center justify-center m-1  ">
            <img src={servicio} className="w-10 rounded-full bg-gray-300 p-1" />
            <h5 className=" font-bold text-sm text-black">Servicios</h5>
          </button>
        ) : (
          <button className="flex flex-col items-center justify-center m-1 ">
            <img src={servicio} className="w-10 rounded-full p-1" />
            <h5 className="text-sm text-black">Servicios</h5>
            <span className=""> </span>
          </button>
        )}
      </Link>
      <Link to="/admin/billing">
        {url === "/admin/billing" ? (
          <button className="flex flex-col items-center justify-center m-1  ">
            <img src={factura} className="w-10 rounded-full bg-gray-300 p-1" />
            <h5 className=" font-bold text-sm text-black">Facturación</h5>
          </button>
        ) : (
          <button className="flex flex-col items-center justify-center m-1   ">
            <img src={factura} className="w-10 rounded-full p-1" />
            <h5 className="text-sm text-black">Facturación</h5>
            <span className=""> </span>
          </button>
        )}
      </Link>

      <Link to="/admin/generar-recibo">
        {url === "/admin/generar-recibo " ? (
          <button className="flex flex-col items-center justify-center m-1  ">
            <img src={recibo} className="w-10 rounded-full bg-gray-300 p-1" />
            <h5 className=" font-bold text-sm text-black">Recibos</h5>
          </button>
        ) : (
          <button className="flex flex-col items-center justify-center m-1   ">
            <img src={recibo} className="w-10 rounded-full p-1" />
            <h5 className="text-sm text-black">Recibos</h5>
            <span className=""> </span>
          </button>
        )}
      </Link>
      <Link to="/admin/batches">
        {url === "/admin/batches" ? (
          <button className="flex flex-col items-center justify-center m-1  ">
            <img src={home} className="w-10 rounded-full bg-gray-300 p-1" />
            <h5 className=" font-bold text-sm text-black">Lotes</h5>
          </button>
        ) : (
          <button className="flex flex-col items-center justify-center m-1   ">
            <img src={home} className="w-10 rounded-full p-1" />
            <h5 className="text-sm text-black">Lotes</h5>
            <span className=""> </span>
          </button>
        )}
      </Link>
    </div>
  );
}

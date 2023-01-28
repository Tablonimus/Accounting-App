import React from "react";
import { Link } from "react-router-dom";

export default function SideBarHome() {
  return (
    <div className="flex flex-col w-96 h-screen bg-gray-500">
      <Link to="/gastoskw">
        <button className="border w-full h-24 bg-gray-900">
          <h5 className="text-xl text-white">Cargar costos de electricidad</h5>
        </button>
      </Link>
      <Link to="/emitirfc">
        <button className="border w-full h-24 bg-gray-500">
          <h5 className="text-xl ">Emitir Facturas</h5>
        </button>
      </Link>
      <Link>
        <button className="border w-full h-24 bg-gray-500">
          <h5 className="text-xl ">Emitir Recibos</h5>
        </button>
      </Link>{" "}
      <Link to="/generar-recibo">
        <button className="border w-full h-24 bg-gray-500">
          <h5 className="text-xl ">Cobros</h5>
        </button>
      </Link>
    </div>
  );
}

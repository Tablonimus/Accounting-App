import React from "react";
import { Link } from "react-router-dom";
import boletas from "../../assets/images/boletas.png";
import pagos from "../../assets/images/pagos.png";
import recibos from "../../assets/images/recibos.png";
import atrasados from "../../assets/images/atrasados.png";

export default function BottomBar() {
  return (
    <div className="bg-gray-500 h-20 w-full fixed bottom-0 rounded-t flex flex-row items-center justify-center">
      <Link to="">
        <div className="flex flex-col items-center m-2 hover:bg-gray-600 border-x p-1 ">
          <img src={atrasados} alt="" />
          <h5 className="font-bold">Atrasadas</h5>
        </div>
      </Link>

      <Link to="">
        <div className="flex flex-col items-center m-2 hover:bg-gray-600 border-x p-1 ">
          <img src={boletas} alt="" />
          <h5 className="font-bold">Resumen</h5>
        </div>
      </Link>

      <Link to="">
        <div className="flex flex-col items-center m-2 hover:bg-gray-600 border-x  p-1 ">
          <img src={pagos} alt="" />
          <h5 className="font-bold">Pagos</h5>
        </div>
      </Link>

      <Link to="">
        <div className="flex flex-col items-center m-2 hover:bg-gray-600 border-x  p-1 ">
          <img src={recibos} alt="" />
          <h5 className="font-bold">Recibos</h5>
        </div>
      </Link>
      <div></div>
      <div></div>
    </div>
  );
}

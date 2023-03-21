import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarHome from "../../components/Bars/NavBarHome";
import ToolsBar from "../../components/Bars/ToolsBar";
import { getService } from "../../redux/actions";
import "../../commonPages/landing.css";

export default function NeighborServices() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getService());
  }, []);
  const services = useSelector((state) => state.service);
  console.log(services);

  return (
    <div className="main h-screen w-screen flex flex-col items-center justify-between">
      <NavBarHome />

      <div className="flex flex-col  items-cen justify-around items-ce w-11/12 lg:w-1/3  gap-2 ">
        {services
          ? services
              .filter((service) => service.nombre !== "Gastos Extraordinarios")
              .map((service) => (
                <div className="font-bold m-1 p-3 bg-gray-300 bg-opacity-80 text-black rounded-lg">
                  <div className="flex justify-center border-b-2 p-2 text-lg">
                    <h3 className=" ">
                      {service.nombre}
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    <section>
                      Precio x Fracción: <span>${service.precio_fraccion}</span>
                    </section>
                    <section>
                      Precio fijo mensual <span>${service.precio_fijo}</span>
                    </section>

                    <section>
                      Proveedor: <span>{service.proveedor}</span>
                    </section>
                  </div>
                </div>
              ))
          : false}
      </div>

      <ToolsBar />
    </div>
  );
}

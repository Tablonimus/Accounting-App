import React from "react";
import NavBarHome from "../Bars/NavBarHome";

export default function EmitirFactura() {
  return (
    <div className="w-full h-screen  flex flex-col bg-gray-900">
      <section>
        <NavBarHome />
      </section>
      <div className="my-5">
        <div className="flex flex-col items-center ">
          <form className="flex flex-col bg-gray-200 rounded w-1/2 justify-center items-center">
            <input
              type="text"
              placeholder="NOMbre o lote de remito interno"
              className="w-96"
            />
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Gasto Ordinario</label>
            <br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> Gasto Extraordinario</label>
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label>
          </form>
        </div>
      </div>
    </div>
  );
}

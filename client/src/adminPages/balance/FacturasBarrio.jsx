import {
  Checkbox,
  Label,
  Radio,
  Select,
  Tabs,
  TextInput,
} from "flowbite-react";
import React from "react";
import add from "../../assets/images/addBilled.png";

export default function FacturasBarrio() {
  return (
    <div className="">
      <div className=" flex items-center">
        <div className="flex flex-col gap-6  bg-gray-300 rounded-lg p-3 drop-shadow-lg items-center border">
          <h3 className="font-bold text-2xl border-b     ">Cargar Factura</h3>
          <form className="flex flex-col gap-4">
            <div>
              <div id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="categoria"
                    value="Selecciona una categoría:"
                  />
                </div>
                <Select id="categoria" required={true}>
                  <option>Seleccionar</option>
                  <option>Luz</option>
                  <option>Internet </option>
                  <option>Municipalidad </option>
                  <option>Otros</option>
                  <option>Contador </option>
                  <option>Administración</option>
                </Select>
                <div className="flex items-center gap-2 mt-2">
                  <label className="ml-5 text-sm" htmlFor="categoria">
                    Otra:
                  </label>
                  <TextInput
                    class=" h-8 rounded-md shadow-lg"
                    id="categoria"
                    type="text"
                    required={true}
                    shadow={true}
                  />
                </div>
              </div>
            </div>
            <hr className="bg.black" />
            <div className="">
              <div className="mb-2 block">
                <Label htmlFor="total" value="Total:" />
              </div>
              <TextInput
                id="total"
                type="number"
                required={true}
                shadow={true}
                placeholder="$..."
              />
            </div>
            <hr className="bg.black" />
            <div>
                <span className="font-bold text-sm">Pagado:</span>
              <fieldset className="flex flex-col gap-2 mt-2" id="radio">
                <div className="flex flex-row items-center gap-2">
                  <Radio
                    id="pagado"
                    name="pagado"
                    value={true}
                    defaultChecked={true}
                  />
                  <Label htmlFor="united-state">Si</Label>
                </div>
                <div className="flex  items-center gap-2">
                  <Radio
                    id="pagado"
                    name="pagado"
                    value={false}
                    defaultChecked
                  />
                  <Label htmlFor="germany">No</Label>
                </div>
              </fieldset>
            </div>
            <hr className="bg.black" />
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file" value="Adjuntar comprobante:" />
              </div>
              <input type="file" />
            </div>
            <hr className="bg.black" />
            <div className="flex items-center gap-2">
              <Checkbox id="revisar" />
              <Label htmlFor="revisar">Los datos son correctos</Label>
            </div>

            <button className="shadow-lg p-1 h-10 flex items-center font-semibold justify-center flex-row gap-1 rounded-lg items-center border-2 hover:bg-green-500  hover:text-white hover:font-bold border-green-500">
              <img src={add} alt="" className="w-8   " />
              Agregar Factura
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-200 m-3">
        <h3 className="font-bold ">Facturas Cargadas</h3>
        <div>
          <span>Buscar x mes</span>
          <span>Buscar x mes</span>
          <span>Buscar x mes</span>
        </div>
      </div>
    </div>
  );
}

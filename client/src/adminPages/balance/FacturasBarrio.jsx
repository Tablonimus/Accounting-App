import {
  Button,
  Checkbox,
  Label,
  Radio,
  Select,
  Tabs,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import add from "../../assets/images/addBilled.png";
import delet from "../../assets/images/delete.png";
import axios from "axios";

export default function FacturasBarrio() {
  let instance = axios.create({});
  instance.interceptors.request.use((config) => {
    delete config.headers; // elimina el encabezado 'token'
    return config;
  });
  //- or after instance has been created
  // instance.defaults.headers.post['header1'] = 'value'

  //- or before a request is made
  // using Interceptors
  // instance.interceptors.request.use(config => {

  //   config.headers.post['header1'] = 'value';
  //   return config;
  // });
  const [input, setInput] = useState({
    comprobante: [],
  });
  const [review, setReview] = useState(false);

  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);

  async function handleImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "lugarEscondido");
    data.append("folder", "lugarEscondido");
    setLoadingImage(true);
    const res = await instance.post(
      "https://api.cloudinary.com/v1_1/tablonimus/image/upload",
      data
    );

    setImage(res.data.secure_url);
    setInput({
      ...input,
      comprobante: [...input.comprobante, res.data.secure_url],
    });

    setLoadingImage(false);
  }

  function handleReview(e) {
    if (!review) {
      setReview(true);
    } else {
      setReview(false);
    }
  }
  function handleInput(e) {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  function handleDelete(event) {
    setInput({
      ...input,
      comprobante: input.comprobante.filter((e) => e !== event),
    });
  }

  console.log(input);

  return (
    <div className="">
      <div className=" flex items-center">
        <div className="flex flex-col gap-6  bg-gray-300 rounded-lg p-3 drop-shadow-lg items-center border">
          <h3 className="font-bold text-2xl border-b">Cargar Factura</h3>
          <form className="flex flex-col gap-4">
            <div>
              <div id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="categoria"
                    value="Selecciona una categoría:"
                  />
                </div>
                <Select
                  onChange={(e) => handleInput(e)}
                  id="categoria"
                  required={true}
                >
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
                    onChange={(e) => handleInput(e)}
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
                onChange={(e) => handleInput(e)}
                type="number"
                required={true}
                shadow={true}
                placeholder="$..."
              />
            </div>
            <hr className="bg.black" />
            <div>
              <span className="font-bold text-sm">Pagado:</span>
              <fieldset className="flex flex-row gap-2 mt-2" id="radio">
                <div className="flex flex-row items-center gap-2">
                  <Radio
                    id="pagado"
                    name="pagado"
                    value={true}
                    onChange={(e) => handleInput(e)}
                  />
                  <Label htmlFor="united-state">Si</Label>
                </div>
                <div className="flex  items-center gap-2">
                  <Radio
                    id="pagado"
                    name="pagado"
                    value={false}
                    onChange={(e) => handleInput(e)}
                    defaultChecked={true}
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
              <input
                id="comprobante"
                name="comprobante"
                type="file"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => handleImage(e)}
              />
            </div>
            <hr className="bg.black" />
            <div className="flex items-center gap-2">
              <Checkbox
                id="revisar"
                value={true}
                onChange={(e) => handleReview(e)}
              />
              <Label htmlFor="revisar">Los datos son correctos</Label>
            </div>

            <Button
              outline={true}
              disabled={review ? false : true}
              color="success"
            >
              <img src={add} alt="" className="w-8   " />
              <span className="text-black">Agregar Factura</span>
            </Button>
          </form>
        </div>
        <div>
          {loadingImage ? (
            <h3>Cargando imágenes...</h3>
          ) : (
            input.comprobante.map((el) => (
              <div key={el} className="relative">
                <button
                  key={el}
                  type="button"
                  onClick={() => handleDelete(el)}
                  className="absolute top-0 right-0 p-2 border-4 rounded-lg font-bold text-red-500 bg-red-300 border-red-500"
                >
                 <img src={delet} alt="" width="20px" height="20px" />
                </button>
                <img src={el} alt="" width="300px" />
              </div>
            ))
          )}
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

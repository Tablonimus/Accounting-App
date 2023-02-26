import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { createBatch } from "../../redux/actions";
import add from "../../assets/images/addhome.png";

export default function CreateBatchModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [input, setInput] = useState({
    dni_titular: "-",
    domicilio_real: "-",
    gastos_comunes: false,
    internet: false,
    luz: false,
    m2: "-",
    mail: "-",
    medidor_luz: "-",
    nacionalidad: "-",
    numero_lote: "-",
    telefono: "-",
    telefono2: "-",
    titular: "-",
    ubicacion: "-",
  });

  function modalHandler() {
    showModal === true ? setShowModal(false) : setShowModal(true);
  }
  function inputHandler(e) {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  function batchHandler() {
    alert("Seguro que deseas crear este lote?");
    dispatch(createBatch(input));
  }

  return (
    <footer className="w-full flex justify-center">
      <button
        className="shadow-lg p-1 h-10 w-36 flex items-center justify-center flex-row gap-1 rounded-lg items-center border-2 hover:bg-green-500  hover:text-white hover:font-bold font-semibold border-green-500"
        onClick={modalHandler}
      >
        <img src={add} alt="" className="w-8" />
        Agregar
      </button>

      <Modal show={showModal} size="5xl" popup={true} onClose={modalHandler}>
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col justify-center space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ">
            <div className="flex justify-center">
              <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
                Nuevo Lote
              </h3>
            </div>
            <form
              action="/batches"
              onSubmit={(e) => batchHandler(e)}
              className="flex lg:flex-row flex-col justify-center sm:flex-col gap-2"
              onChange={(e) => inputHandler(e)}
            >
              <div className="bg-slate-200 rounded-lg p-4 lg:w-1/2">
                <span className="border-b border-black text-xl">
                  Datos del lote
                </span>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="numero_lote" value="N°lote (*)" />
                    </div>
                    <TextInput id="numero_lote" type="text" required={true} />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="m2" value="m2 (*)" />
                    </div>
                    <TextInput id="m2" type="number" required={true} />
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="medidor_luz" value="Medidor de luz (*)" />
                  </div>
                  <TextInput id="medidor_luz" type="number" required={true} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ubicacion" value="Ubicación (*)" />
                  </div>
                  <TextInput id="ubicacion" type="text" required={true} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="dni_titular" value="Dni del titular (*)" />
                  </div>
                  <TextInput id="dni_titular" type="text  " required={true} />

                  <div className="mb-2 block">
                    <Label htmlFor="titular" value="Titular (*)" />
                  </div>
                  <TextInput id="titular" type="text  " required={true} />
                </div>
                <span className="border-b border-black text-xl">
                  Servicios activos
                </span>
                <div className="flex flex-row gap-3">
                  <label className="flex flex-row items-center gap-1 ">
                    <input
                      type="checkbox"
                      id="gastos_comunes"
                      value={true}
                      className=""
                    />{" "}
                    Gastos comunes
                  </label>
                  <label className="flex flex-row items-center gap-1 ">
                    <input type="checkbox" id="luz" value={true} className="" />{" "}
                    Luz
                  </label>
                  <label className="flex flex-row items-center gap-1 ">
                    <input
                      type="checkbox"
                      id="internet"
                      value={true}
                      className=""
                    />{" "}
                    Internet
                  </label>
                  <br />
                </div>
              </div>

              <hr></hr>
              <div className="bg-slate-200 rounded-lg p-4 lg:w-1/2">
                <span className="border-b border-black text-xl">
                  Datos del titular
                </span>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="domicilio_real" value="Domicilio real" />
                  </div>
                  <TextInput id="domicilio_real" type="text" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="nacionalidad" value="Nacionalidad" />
                  </div>
                  <TextInput id="nacionalidad" type="text" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="mail" value="E-Mail" />
                  </div>
                  <TextInput id="mail" type="email" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="telefono" value="Telefono" />
                  </div>
                  <TextInput id="telefono" type="phone" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="telefono2" value="Telefono 2" />
                  </div>
                  <TextInput id="telefono2" type="phone" />
                </div>
              </div>

              <Button gradientMonochrome="success" type="submit">
                Crear
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </footer>
  );
}

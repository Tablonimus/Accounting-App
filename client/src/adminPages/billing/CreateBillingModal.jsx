import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { createService } from "../../redux/actions";

export default function CreateServiceModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [input, setInput] = useState({
    nombre: "",
    precio_fraccion: "",
    precio_fijo: "",
    proveedor: "",
  
  });

  function modalHandler() {
    showModal === true ? setShowModal(false) : setShowModal(true);
  }
  function inputHandler(e) {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  function batchHandler() {
  
    alert("Seguro que deseas crear este Servicio?");
    dispatch(createService(input));
  }

  return (
    <footer className="bg-blue-900 h-24 w-full">
      <React.Fragment>
        <Button onClick={modalHandler}>Agregar Servicio</Button>
        <Modal show={showModal} size="md" popup={true} onClose={modalHandler}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Nuevo Servicio
              </h3>
              <form
                action="/admin/billing"
                onSubmit={(e) => batchHandler(e)}
                className="flex flex-col gap-2"
                onChange={(e) => inputHandler(e)}
              >

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="nombre" value="Nombre (*)" />
                  </div>
                  <TextInput id="nombre" type="text" required={true} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="precio_fraccion" value="Px Fraccion (*)" />
                  </div>
                  <TextInput id="precio_fraccion" type="number  " required={true} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="precio_fijo" value="Px Fijo" required={true} />
                  </div>
                  <TextInput id="precio_fijo" type="number" />
                </div>
              
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="proveedor" value="Proveedor" required={true} />
                  </div>
                  <TextInput id="proveedor" type="text" />
                </div>
              
                <div className="w-full">
                  <Button gradientMonochrome="success" type="submit">
                    Crear
                  </Button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </footer>
  );
}

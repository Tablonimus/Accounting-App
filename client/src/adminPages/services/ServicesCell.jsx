import { Table } from "flowbite-react";
import React, { useState } from "react";
import { batch, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import edit from "../../assets/images/edit.png";
import save from "../../assets/images/save.png";
import { patchService } from "../../redux/actions";

export default function ServicesCell({ services }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editState, setEditState] = useState(false);
  const [editedService, setEditedService] = useState({});

  function editService(e) {
    setEditedService({
      ...editedService,

      [e.target.id]: {
        ...editedService[e.target.id],
        [e.target.name]: e.target.value,
      },
    });
  }

  function changeState(e) {
    editState === false ? setEditState(true) : setEditState(false);
  }

  async function saveButton(e) {
    e.preventDefault();
    dispatch(patchService(editedService)).then((a) =>
      window.location.reload(true)
    );
  }

  return (
    <div className=" w-full ">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Px Fraccion</Table.HeadCell>
          <Table.HeadCell>Px Fijo</Table.HeadCell>
          <Table.HeadCell>Proveedor</Table.HeadCell>
          {editState === false ? (
            <Table.HeadCell>
              <button
                onClick={(e) => changeState(e)}
                className="w-8 border-2 border-gray-500 rounded-lg p-1 hover:border-yellow-300 drop-shadow-lg"
              >
                <img src={edit} alt="" className="w-6" />
              </button>
            </Table.HeadCell>
          ) : (
            <Table.HeadCell>
              <button
                onClick={(e) => saveButton(e)}
                className="w-8 border-2 border-gray-500 rounded-lg p-1 hover:border-yellow-300 drop-shadow-lg"
              >
                <img src={save} alt="" className="w-6" />
              </button>
            </Table.HeadCell>
          )}
        </Table.Head>
        {editState === false ? (
          <Table.Body className="divide-y">
            {services?.length > 0
              ? services.map((service) => (
                  <Table.Row
                    key={service.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {service.nombre}
                    </Table.Cell>
                    <Table.Cell>{service.precio_fraccion}</Table.Cell>
                    <Table.Cell>{service.precio_fijo}</Table.Cell>
                    <Table.Cell>{service.proveedor}</Table.Cell>

                    <Table.Cell></Table.Cell>
                  </Table.Row>
                ))
              : false}
          </Table.Body>
        ) : (
          <Table.Body className="divide-y">
            {services.length > 0
              ? services.map((service) => (
                  <Table.Row
                    key={service.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {service.nombre}
                    </Table.Cell>
                    <Table.Cell>
                      <input
                        type="text"
                        id={service.nombre}
                        name="precio_fraccion"
                        onChange={(e) => editService(e)}
                        placeholder={service.precio_fraccion}
                        className="w-14 h-4 text-sm rounded-lg"
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <input
                        type="text"
                        id={service.nombre}
                        name="precio_fijo"
                        onChange={(e) => editService(e)}
                        placeholder={service.precio_fijo}
                        className="w-16 h-4 text-sm rounded-lg"
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <input
                        type="text"
                        id={service.nombre}
                        name="proveedor"
                        onChange={(e) => editService(e)}
                        placeholder={service.proveedor}
                        className="w-20 h-4 text-sm rounded-lg"
                      />
                    </Table.Cell>

                    <Table.Cell></Table.Cell>
                  </Table.Row>
                ))
              : false}
          </Table.Body>
        )}
      </Table>
    </div>
  );
}

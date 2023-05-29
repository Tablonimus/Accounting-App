import { Table, Tooltip } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import edit from "../../assets/images/edit.png";
import save from "../../assets/images/save.png";
import { patchInvoice } from "../../redux/actions";
export default function InvoiceCell({ invoices }) {
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
    dispatch(patchInvoice(editedService)).then((a) =>
      window.location.reload(true)
    );
  }

  return (
    <div className="w-full">
      <Table hoverable={true} class="  ">
        <Table.Head class="bg-blue-300">
          <Table.HeadCell>Fecha</Table.HeadCell>
          <Table.HeadCell>N°</Table.HeadCell>
          <Table.HeadCell>Lote</Table.HeadCell>
          <Table.HeadCell>Detalle</Table.HeadCell>
          <Table.HeadCell>Remitente</Table.HeadCell>
          <Table.HeadCell>Monto</Table.HeadCell>
          <Table.HeadCell>Interés Acumulado</Table.HeadCell>
          <Table.HeadCell>A cta</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Pagado</Table.HeadCell>

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
            {invoices?.length > 0
              ? invoices.map((invoices) => (
                  <Table.Row
                    key={invoices.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {invoices.createdAt
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {invoices.id}
                    </Table.Cell>

                    <Table.Cell>{invoices.numero_lote}</Table.Cell>
                    <Table.Cell>
                      <Tooltip
                        content={invoices.detalle}
                        animation="duration-1000"
                      >{`${invoices.detalle.slice(0, 18)}...`}</Tooltip>
                    </Table.Cell>
                    <Table.Cell>{invoices.remitente}</Table.Cell>
                    <Table.Cell>${invoices.importe_facturado}</Table.Cell>
                    <Table.Cell>
                      <span className="font-bold text-red-500">
                        {invoices.intereses.slice(1).map((p) => `+%${p * 100}`)}
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="font-bold text-green-500">
                        $
                        {invoices.a_cuenta.reduce(
                          (accumulator, currentValue) =>
                            parseFloat(accumulator) + parseFloat(currentValue),
                          0
                        )}
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="font-bold text-red-500">
                        ${invoices.total}
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      {invoices.pagado === false ? (
                        <span className="font-bold text-red-500">No</span>
                      ) : (
                        <span className="font-bold text-green-500">Si</span>
                      )}
                    </Table.Cell>

                    <Table.Cell>
                      <a
                        href="/tables"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Ver
                      </a>
                    </Table.Cell>
                  </Table.Row>
                ))
              : false}
          </Table.Body>
        ) : (
          <Table.Body className="divide-y">
            {invoices?.length > 0
              ? invoices.map((invoices) => (
                  <Table.Row
                    key={invoices.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {invoices.createdAt
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                    </Table.Cell>
                    
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {invoices.id}
                    </Table.Cell>

                    <Table.Cell>{invoices.numero_lote}</Table.Cell>
                    <Table.Cell>
                      <Tooltip
                        content={invoices.detalle}
                        animation="duration-1000"
                      >{`${invoices.detalle.slice(0, 18)}...`}</Tooltip>
                    </Table.Cell>
                    <Table.Cell>{invoices.remitente}</Table.Cell>
                    <Table.Cell>${invoices.importe_facturado}</Table.Cell>
                 
                    <Table.Cell>
                      <input
                        type="number"
                        id={invoices.id}
                        name="intereses"
                        onChange={(e) => editService(e)}
                        placeholder={invoices.intereses}
                        className="w-20 h-4 text-sm rounded-lg"
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <input
                        type="number"
                        id={invoices.id}
                        name="a_cuenta"
                        onChange={(e) => editService(e)}
                        placeholder={invoices.a_cuenta}
                        className="w-20 h-4 text-sm rounded-lg"
                      />
                    </Table.Cell>
                   
                    <Table.Cell>
                      <span className="font-bold text-red-500">
                        ${invoices.total}
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      {invoices.pagado === false ? (
                        <span className="font-bold text-red-500">No</span>
                      ) : (
                        <span className="font-bold text-green-500">Si</span>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        href="/tables"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Ver
                      </a>
                    </Table.Cell>
                  </Table.Row>
                ))
              : false}
          </Table.Body>
        )}
      </Table>
    </div>
  );
}

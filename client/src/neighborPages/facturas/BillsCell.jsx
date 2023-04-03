import { Table, Tooltip } from "flowbite-react";
import React from "react";

export default function BillsCell({ invoices }) {
  return (
    <div className="">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Fecha</Table.HeadCell>
          <Table.HeadCell>N°</Table.HeadCell>
          <Table.HeadCell>Lote</Table.HeadCell>
          <Table.HeadCell>Detalle</Table.HeadCell>
          <Table.HeadCell>Remitente</Table.HeadCell>
          <Table.HeadCell>Monto Inicial</Table.HeadCell>
          <Table.HeadCell>Interés Acumulado</Table.HeadCell>
          <Table.HeadCell>A cta</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Pagado</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {invoices?.length > 0
            ? invoices
                .map((invoices) => (
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
                      {invoices.total == 0 ? (
                        <span className="font-bold text-green-500">
                          ${invoices.total}
                        </span>
                      ) : (
                        <span className="font-bold text-red-500">
                          ${invoices.total}
                        </span>
                      )}
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
                .reverse()
            : false}
        </Table.Body>
      </Table>
    </div>
  );
}

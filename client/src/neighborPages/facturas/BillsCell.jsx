import { Table } from "flowbite-react";
import React from "react";

export default function BillsCell({ invoices }) {
  console.log("UBVIAKJSDHASJLDSA", invoices);
  return (
    <div className="">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Fecha</Table.HeadCell>
          <Table.HeadCell>N°</Table.HeadCell>
          <Table.HeadCell>Lote</Table.HeadCell>
          <Table.HeadCell>Remitente</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Detalle</Table.HeadCell>
          <Table.HeadCell>Pagado</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {invoices?.length > 0
            ? invoices.map((invoices) => (
                <Table.Row
                  key={invoices.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {invoices.createdAt.split("T")[0].split("-").reverse().join("-")}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {invoices.id}
                  </Table.Cell>

                  <Table.Cell>{invoices.numero_lote}</Table.Cell>
                  <Table.Cell>{invoices.remitente}</Table.Cell>
                  <Table.Cell>{invoices.total}</Table.Cell>
                  <Table.Cell>{invoices.detalle}</Table.Cell>
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
              )).reverse()
            : false}
        </Table.Body>
      </Table>

    </div>
  );
}

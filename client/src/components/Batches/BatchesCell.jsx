import { Table } from "flowbite-react";
import React from "react";
import { batch } from "react-redux";

export default function BatchesCell({ batches }) {
  return (
    <div className=" ">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>N°</Table.HeadCell>
          <Table.HeadCell>Titular</Table.HeadCell>
          <Table.HeadCell>Teléfono</Table.HeadCell>
          <Table.HeadCell>G/C</Table.HeadCell>
          <Table.HeadCell>Luz</Table.HeadCell>
          <Table.HeadCell>Internet</Table.HeadCell>
          <Table.HeadCell>
         -
          </Table.HeadCell>
        </Table.Head>

        <Table.Body class="divide-y ">
            {batches.length > 0
              ? batches.map((batch) => (
                  <Table.Row
                    key={batch.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {batch.numero_lote}
                    </Table.Cell>
                    <Table.Cell>{batch.titular}</Table.Cell>
                    <Table.Cell>{batch.telefono}</Table.Cell>
                    <Table.Cell>
                      {batch.gastos_comunes === false ? (
                        <span className="font-bold text-red-500">No</span>
                      ) : (
                        <span className="font-bold text-green-500">Si</span>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      {batch.luz === false ? (
                        <span className="font-bold text-red-500">No</span>
                      ) : (
                        <span className="font-bold text-green-500">Si</span>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      {batch.internet === false ? (
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
      </Table>
    </div>
  );
}

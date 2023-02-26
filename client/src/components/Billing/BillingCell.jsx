import { Table } from "flowbite-react";
import React from "react";
import { batch } from "react-redux";

export default function BillingCell({ services }) {
  return (
    <div className=" ">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Px Fraccion</Table.HeadCell>
          <Table.HeadCell>Px Fijo</Table.HeadCell>
          <Table.HeadCell>Proveedor</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
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
                  <Table.Cell>{service.precio_fraccion}</Table.Cell>
                  <Table.Cell>{service.precio_fijo}</Table.Cell>
                  <Table.Cell>{service.proveedor}</Table.Cell>

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

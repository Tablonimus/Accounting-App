import React, { useState } from "react";
import InvoiceCell from "./InvoiceCell";
export default function SearchBill({ invoices }) {
  const [search, setSearch] = useState(invoices);

  function handleSearch(e) {
    setSearch(
      invoices.filter((invoice) => invoice.numero_lote.includes(e.target.value))
    );
  }

  function handleFilter(e) {}

  return (
    <div className="col-span-3 p-3 gap-3 flex flex-col  items-center  rounded-lg bg-gray-300 bg-opacity-50 shadow-lg ">
      {/* <h2 className="m-2 font-semibold">ÚLTIMAS FACTURAS</h2> */}
        <h2 className=" font-semibold text-2xl">BUSCAR FACTURA</h2>
      <div className="p-2 mb-2 flex flex-col  items-center  rounded-lg bg-gray-300 shadow-lg ">
        <div>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="relative ">
              <div className="flex absolute inset-y-0 right-0 items-center pl-3 pt-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                // onChange={(e) => handleInputChange(e)}
                type="text"
                id="input-group-search"
                className="block p-2 mt-2 pl-10 w-40 lg:w-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="Buscar Lote"
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <div className=" flex flex-row items-center gap-2">
              <input type="checkbox" id="paid" value={true} />{" "}
              <label htmlFor="paid">Pagadas</label>
              <input type="checkbox" id="unpaid" value={false} />{" "}
              <label htmlFor="unpaid">No pagadas</label>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-96 bg-gray-100 rounded-lg shadow-lg">
        <InvoiceCell invoices={!search ? invoices : search} />
      </div>
    </div>
  );
}

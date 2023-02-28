import React from "react";
import { useState } from "react";
import NavBarHome from "../Bars/NavBarHome";
import { useSelector, useDispatch } from "react-redux";
import {
  getBatch,
  getService,
  createInvoice,
  getInvoice,
} from "../../redux/actions";

import { useEffect } from "react";

import AdminBar from "../AdminView/AdminBar";

import InvoiceCell from "./InvoiceCell";

export default function Billing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatch());
    dispatch(getService());
    dispatch(getInvoice());
  }, [dispatch]);

  const batches = useSelector((state) => state.batch);
  const services = useSelector((state) => state.service);
  const invoices = useSelector((state) => state.invoice);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const [checkService, setCheckService] = useState("");
  function handleService(e) {
    setCheckService(e.target.id);
  }

  let filter = [];

  for (let i = 0; i < batches.length; i++) {
    if (checkService === "Luz" && batches[i].luz !== false)
      filter.push(batches[i]);
    if (checkService === "Internet" && batches[i].internet !== false)
      filter.push(batches[i]);
    if (
      checkService === "Gastos Comunes" &&
      batches[i].gastos_comunes !== false
    )
      filter.push(batches[i]);
  }

  useEffect(() => {
    setList(filter);
  }, [isCheck, isCheckAll]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.numero_lote));

    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  function setBilling() {
    var sources = {
      service: checkService,
      batches: isCheck,
    };

    alert("Se crearan facturas");
    dispatch(createInvoice(sources));
  }

  return (
    <div className="flex flex-col bg-gray-200 h-screen justify-between">
      <NavBarHome />

      <div className="lg:grid lg:grid-cols-6 p-3 flex flex-col gap-2 ">
        <div className="col-span-1 p-2 flex flex-col  items-center  rounded-lg bg-gray-300 shadow-lg ">
          <h2 className="m-2 font-semibold">FACTURACION EN CADENA</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 p-3 rounded-lg shadow-xl ">
              <h3 className="border-b border-black text-xl mb-2">
                Servicio a facturar:
              </h3>
              <form>
                {services.length > 0
                  ? services.map((service) => (
                      <div key={service.id}>
                        <div className="flex flex-row gap-1 items-center">
                          <input
                            type="radio"
                            id={service.nombre}
                            name="service"
                            onClick={handleService}
                          />
                          <label htmlFor={service.nombre}>
                            {service.nombre}
                          </label>
                        </div>
                      </div>
                    ))
                  : false}
              </form>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg shadow-xl  ">
              <h3 className="border-b border-black text-xl mb-2">
                Lotes disponibles para facturación:
              </h3>
              <form className="overflow-y-auto h-56 ">
                <div className="flex flex-row gap-1 items-center">
                  <input
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    onChange={handleSelectAll}
                    checked={isCheckAll}
                  />
                  <label htmlFor="selectAll">Seleccionar todos</label>
                </div>
                {filter.length > 0
                  ? filter.map((batch) => (
                      <div key={batch.id}>
                        <div className="flex flex-row gap-1 items-center">
                          <input
                            type="checkbox"
                            id={batch.numero_lote}
                            name={batch.titular}
                            onChange={handleClick}
                            checked={isCheck.includes(batch.numero_lote)}
                          />
                          <label htmlFor={batch.numero_lote}>
                            {batch.numero_lote} - {batch.titular}
                          </label>
                        </div>
                      </div>
                    ))
                  : false}
              </form>
            </div>
          </div>
          <button
            className="w-24 h-14 m-3 rounded-lg  bg-red-500 hover:bg-red-600 font-bold text-white shadow-lg border-slate-500 border-black"
            onClick={setBilling}
          >
            Facturar
          </button>
        </div>

        <div className="col-span-3 p-2 flex flex-col  items-center  rounded-lg bg-gray-300 shadow-lg ">
          <h2 className="m-2 font-semibold">ÚLTIMAS FACTURAS</h2>
          <div className="overflow-auto h-5/6 bg-gray-100 rounded-lg shadow-lg">
            <InvoiceCell invoices={invoices} />
          </div>
        </div>

        <div className="col-span-2  p-2 flex flex-col  items-center  rounded-lg bg-gray-300 shadow-lg ">
          <h2 className="m-2 font-semibold">BUSCAR FACTURA</h2>
          <div>
            <div className="flex flex-col bg-red-200">
              <div class="relative mb-5">
                <div class="flex absolute inset-y-0 right-0 items-center pl-3 pt-2 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  // onChange={(e) => handleInputChange(e)}
                  type="text"
                  id="input-group-search"
                  class="block p-2 mt-2 pl-10 w-40 lg:w-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                  placeholder="Buscar factura..."
                />
              </div>
              <div className=" flex flex-row items-center gap-2">
                <input type="checkbox" id="paid" value={true} />{" "}
                <label for="paid">Pagadas</label>
                <input type="checkbox" id="unpaid" value={false} />{" "}
                <label for="unpaid">No pagadas</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminBar />
    </div>
  );
}
